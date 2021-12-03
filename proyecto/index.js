const express = require('express');
const app = express();
const rumysql = require('./src/rutas/rumysql');
const rumongo = require('./src/rutas/rumongo');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rumysql);
app.use('/', rumongo);

app.listen(3000,()=>{
    console.log("escuchando 3000");
})