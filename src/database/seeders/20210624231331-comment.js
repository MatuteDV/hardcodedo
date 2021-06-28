'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Comments', [
    {
      name: 'comment 1',
      text: 'texto comentario 1',
      tutorialId: 1
    },
    {
      name: 'comment 2',
      text: 'texto comentario 2',
      tutorialId: 1
    },
    {
      name: 'comment 3',
      text: 'texto comentario 3',
      tutorialId: 2
    },
   ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments');
  }
};
