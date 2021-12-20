import  {option} from "../model/products";
import express from 'express';
import {graphqlHTTP} from "express-graphql";
import  schema from '../controller/express-graphql/shema';
const  knex = require("knex")(option);
import ProductosDaoDB from './dao/productosDaoDB.js'
import DTO from './dto/productos.js'


const router = express.Router();

const root = {
    message: ()=> "Hello Word!"
}



router.use('/grhpql', graphqlHTTP({
    schema: schema,
    rootValue: root, 
    graphiql: true
}));

router.get('/list_products',(req,res) =>{
    knex('productos').select('*').then( data => {
        res.json(data)
    })
}) 


router.post('/new_products', (req,res) =>{
    const productos = req.body;
    console.log(productos);
    knex('productos')
    .returning("id")
    .insert(productos)
    .then(_=> res.send("listo"))
})

router.put("/changes_prod/:id", (req,res) =>{
    const productos = req.body;
    knex('productos').where('id', req.params.id)
                .update({
                    producto: req.body.producto,
                    stock: req.body.stock,
                    categoria: req.body.categoria
                })
                .then(function(){
                    res.send(productos)
                })
})

router.delete('/delete/:id', (req,res) =>{
    const {id} = req.params;
    //knex('usr').where({id}).del().then(_=> res.send('Ok'))
    knex('productos').where('id', req.params.id).del(id).then(_=>res.send('eliminado'))
})


module.exports = router;

