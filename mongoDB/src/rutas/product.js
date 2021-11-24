const express = require("express");
const { get }  = require("../generadores/productos")
const product = require("../controllers/produc_controller");
const router = express.Router();


router.get('/test', (req, res) => {
    res.send('Testing...')
})

router.get('/generar/:cant?', (req, res) => {
    let cant = req.params.cant || 10;
    res.json(product.generar(cant));

})



module.exports = router;