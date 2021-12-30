const mysql = require("mysql");


const option = {
    client: "mysql",
    connection:{
        port:3307,
        host: '127.0.0.1',
        user: 'root',
        passaword: '',
        database: 'test'
    },
    pool:{min:0, max:7}
}




module.exports = {option}
