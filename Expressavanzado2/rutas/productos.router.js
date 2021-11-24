const express = require("express");
const router = express.Router();


router.get('',(req,res)=>{

    res.send("Esta ruta traera todos los productos") 
 })



module.exports = router;