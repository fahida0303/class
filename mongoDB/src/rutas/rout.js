const express = require("express");
const productos_Sc = require("../conect/modelo");
const router = express.Router();

router.get('/usr',(req,res) =>{
    const newproducto = new productos_Sc(req.body);
    res.send(newproducto);
})


router.post('/new_usr', (req,res) =>{
    const product = req.body;
   const newproducto = new productos_Sc(req.body);
    newproducto.save();
    res.json(product)
})


router.put('/correct_usr/:id', (req, res) =>{
    const product = req.body;
    const newproducto = new productos_Sc(req.body);
     newproducto.save();
     res.json(product)
})

router.delete('/dele/:id', (req,res) =>{
    const deleteproducto = productos_Sc(req.body);
    deleteproducto.remove();
    res.send("eliminado")
})





module.exports = router;
