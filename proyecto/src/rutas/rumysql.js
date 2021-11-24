const  {option} = require("../DB/db");
const knex = require("knex")(option);
 const tabla = require("../modelos/tablemysql");
 const express = require('express');

const router = express.Router();

router.get('/',(req,res) =>{
    knex('productos').select('*').then( data => {

        res.json(data)
    })
}) 

router.post('/new_prod', (req,res) =>{
    const {productos} = req.body;
    console.log(productos);
    knex('productos').insert(productos).then(_=> res.send('listo'))
    
})

router.put("/correct_prod/:id", (req,res) =>{
    const {id} = req.params;
    knex('productos').where({id: 1}).update({producto: 'flor'},['id', 'producto']).then(_=> res.send('editado'))
})

router.delete('/delete/:id', (req,res) =>{
    const {id} = req.params;
    //knex('usr').where({id}).del().then(_=> res.send('Ok'))
    knex('productos').where({id: 2}).del(id).then(_=>res.send('eliminado'))
})


module.exports = router;

