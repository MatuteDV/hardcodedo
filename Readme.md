## Seed

Con un seed podremos popular tablas con datos mediante comando de sequelize-cli.

* Para crear un seed haremos uso del comando

`sequelize seed --name nombreModelo`

*Con esto se creará un archivo de seed **nombreModelo.js** en una carpeta /**seeders** dentro de /**database**, o donde le especifiquemos en nuestro archivo **.sequelizerc***

`const path = require('path')
module.exports = {
	config: path.resolve('./src/database/config', 'config.js'),
	'models-path': path.resolve('./src/database/models'),
	'seeders-path': path.resolve('./src/database/seeders'),
	'migrations-path': path.resolve('./src/database/migrations'),
}`

* En el archivo**nombreModelo.js** encontramos que se exporta un objeto literal con dos métodos.
  * El método`up`, donde indicaremos que queremos que suceda cuando se corre un`db:seed`
  * El método`down`, donde indicaremos que queremos que suceda cuando se corre un`db:seed:undo`

Dentro de cada método encontraremos ejemplos muy útiles para crear nuestros seeders. 

Para el método up haremos uso de **queryInterface.bulkInsert()**, al que le pasaremos dos parametros. El primero es el nombre de la tabla donde queremos popular datos y el segundo es un array de objetos literales con los datos a insertar.

`await queryInterface.bulkInsert('Tutorials', [
	{
		id: 1,
		title: 'tuto01',
		description: 'Desc tuto01'
	},
	{
		id: 2,
		title: 'tuto02',
		description: 'Desc tuto02'
	}
]);`


* Para hacer uso de un seed, usaremos sequelize-cli nuevamente. Mediante sequelize`db:seed:all --debug` correremos todos los seeders, y en orden, que tengamos en la carpeta  /**seeders**. Y el la bandera (parametro) "--debug" es para activar, que si ocurre un error, nos muestre por consola el error.

## .bulkCreate()

El método bulkCreate() sirve para hacer *N* **.create()** en una sola instrucción. Así como pasamos un objeto literal en un create(), aquí pasaremos un array de objetos literales para obtener tantos create() como elementos del array.

El método se ejecuta a partir de un modelo al igal que el create **db.Model.bulkCreate()**.
