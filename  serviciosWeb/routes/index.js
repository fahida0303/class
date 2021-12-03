
const  {option} = require("../data/db");
const knex = require("knex")(option);
 const express = require('express');
 const {graphqlHTTP} = require("express-graphql");
 const schema =  require('../express-graphql/shema');

const router = express.Router();

const root = {
    message: ()=> "Hello Word!"
}



router.use('/grhpql', graphqlHTTP({
    schema: schema,
    rootValue: root, 
    graphiql: true
}));

router.get('/product/:id',(req,res) =>{
    knex('productos').select('*').then( data => {
        res.json(data)
    })
}) 


router.post('/new_prod', (req,res) =>{
    const products = req.body;
    console.log(products);
    knex('products')
    .returning("id")
    .insert(products)
    .then(_=> res.send("listo"))
})

// router.put("/changes_prod/:id", (req,res) =>{
//     const productos = req.body;
//     knex('productos').where('id', req.params.id)
//                 .update({
//                     producto: req.body.producto,
//                     stock: req.body.stock,
//                     categoria: req.body.categoria
//                 })
//                 .then(function(){
//                     res.send(productos)
//                 })
// })

// router.delete('/delete/:id', (req,res) =>{
//     const {id} = req.params;
//     //knex('usr').where({id}).del().then(_=> res.send('Ok'))
//     knex('productos').where('id', req.params.id).del(id).then(_=>res.send('eliminado'))
// })


module.exports = router;

