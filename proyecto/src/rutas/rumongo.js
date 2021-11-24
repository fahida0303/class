const mongoose = require('mongoose')
const mongo = require('../modelos/mongo');
const express = require('express');

const router = express.Router();


router.get('/car',(req,res) =>{
    const newproducto = new productos_Sc(req.body);
    res.send(newproducto);
})


router.post('/new_car', (req,res) =>{
    const product = req.body;
   const newproducto = new mongo(req.body);
    newproducto.save();
    res.json(product)
})


router.put('/correct_car/:id', (req, res) =>{
    const product = req.body;
    const newproducto = new mongo(req.body);
     newproducto.save();
     res.json(product)
})

router.delete('/dele/:id', (req,res) =>{
    const deleteproducto = mongo(req.body);
    deleteproducto.remove();
    res.send("eliminado")
})


module.exports = router;