const express= require('express');
const mongoose= require('mongoose');
const app = express();
const router = require("./src/rutas/rout");
const productos = require("./src/rutas/product")



app.use(express.json());
app.use(express.text());

//-----------------------CONECCION------------------------//

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
//-------------------------------------------------//


app.use('/', productos)
app.use('/',router);


app.listen(6000, () =>{
    console.log('Server started');
})