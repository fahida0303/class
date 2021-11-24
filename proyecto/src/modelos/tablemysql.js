const { option } = require('../DB/db')

const knex = require('knex')(option);


async function getProductos() {
    try {
        await knex.schema
            .createTable('productos', table => {
            table.increments('id').notNullable();
            table.string('producto')
            table.integer('stock')
            table.string('categoria')
        })
        await knex('productos').then(_=>console.log('productos creados'))
    } catch (err) {
        console.log(err)
    }finally{
        knex.destroy();
        }
}

module.exports = {
    getProductos
}