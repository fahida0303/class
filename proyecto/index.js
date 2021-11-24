const express = require('express');
const app = express();
const DB = require('./src/DB/db');
const shema = require('./src/rutas/rumysql')
const rumysql = require('./src/rutas/rumysql');
const { Mongoose } = require('mongoose');
const rumongo = require('./src/rutas/rumongo');

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use('/', rumysql);
app.use('/', rumongo);

app.listen(3000,()=>{
    console.log("escuchando 3000");
})