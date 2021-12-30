const { option } = require('./data/ProductMysql')

const knex = require('knex')(option);


async function getProducts() {
    try {
        await knex.schema.createTable('products', table => {
            table.increments('id').notNullable();
            table.string('producto')
            table.integer('stock')
            table.string('categoria')
        })
        await knex('products').then(_=>console.log('productos creados'))
    } catch (err) {
        console.log(err)
    }finally{
        knex.destroy();

        }
}

module.exports = {
    getProducts
}    