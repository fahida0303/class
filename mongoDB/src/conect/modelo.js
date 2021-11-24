const mongoose = require('mongoose');
const productosSchema = mongoose.Schema({
    producto: String,
    categoria: String,
    stock: Number
})

let productodata = mongoose.model('productodata', productosSchema);
module.exports = productodata; 