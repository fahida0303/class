//const {options} = require('./mariaDB')
const {options} = require('./DB/sqlite3');
const knex = require('knex')(options);

const usr = [
    {
        name: "lapiz",
        stock: "23",
        categoria: "negro"

    },
    {
        name: "lapiz2",
        stock: "24",
        categoria: "rojo"
    },
    {
        name: "lapiz3",
        stock: "25",
        categoria: "azul"
    }
]


knex.schema
    .dropTableIfExists("usr")
    .createTable('usr', table =>{
    table.increments('id').notNullable();
    table.string('name')
    table.integer('stock')
    table.string('categoria')
})
    .then(() => {
        knex('usr').insert(usr).then(_=>console.log('usuarios..'))
    }),
    (err) => console.log(err),
    () => knex.destroy();
