const mongoose = require('mongoose');



const url = "mongodb://localhost/";
mongoose.connect(url,{useNewurlParser: true});
const con = mongoose.connection;
try{
    con.on('open', () =>{
        console.log('connected');
    })
}catch(error){
    console.log("Error: "+error);
}

const productosSchema = mongoose.Schema({
    producto: String,
    categoria: String,
    stock: Number
})

let productodata = mongoose.model('productodata', productosSchema);
module.exports = productodata; 