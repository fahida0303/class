import mongoose from 'mongoose';
import express from 'express';
const mongo = require('../data/mongo');

const router = express.Router();





router.get('/list_cars',(req,res) =>{
    const cars = req.body;
    res.send(cars);
})


router.post('/new_cars/:id', (req,res) =>{
    const cars = req.body;
    const newcars  = new mongo({cars});
    newcars.save();
res.json(cars)
})



router.put('/correct_car/:id', (req, res) =>{
    const cars = req.body;
    const newcars= new mongo(req.body);
     newcars.save();
     res.json(newcars)
})

router.delete('/dele/:id', (req,res) =>{
    const deleteproducto = mongo(req.body);
    deleteproducto.remove();
    res.send("eliminado")
})


module.exports = router;