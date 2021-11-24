import { json } from "body-parser";
import express from "express";

const app = express();







app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.get("/Bienbenida", (req,res)=>{
    res.send("Bienbenido todos...")
})

const datos = require("./productos.json");

app.get("/api/productos/listar/", (req,res) =>{
    res.send(datos)
})

app.get("/api/productos/listar/:id", (req, res, ) => {
    try{
        datos.id = `${toString().length}`;
        res.json({itemes: datos})
    }catch(err){
        console.log('no hay productos cargados');
    }
    
})






app.post('/api/productos/guardar', (req,res) =>{
    try{
        datos.id = `${toString().length}`;
        res.json({itemes: datos})
    if(datos){
        datos.JSON.stringify(datos,null,'\t')
    if (err) throw err;
    console.log('el archivo esta a salvo');
    }
}catch (err){
    console.log("no hay producto");
}
})

const server = app.listen(3500, () => {
    console.log("puerto 3500");
})
