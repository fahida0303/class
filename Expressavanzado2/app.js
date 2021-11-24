// import exp from "constants";
import express from "express";
import fs from "fs";
import bodyParse from "body-parser";

let urlencodedParse = bodyParse.urlencoded({extended: false}) 


const app = express();
const routes = require("./rutas/approutas.router");
const productos = require("./rutas/productos.router")
let path = require('path');


app.use(express.json())
app.use(express.urlencoded({extended:true}));



app.get("/Bienbenida", (req,res)=>{
    res.send("Bienbenido todos...")
})

app.get("/app/productos/listar/:id", (req, res) => {
 try{
    fs.promises.readFile('./productos.json').then(data => data.toString('utf-8')).then(datos => {
        let json = JSON.parse(datos);
        json.id = `${datos.length}`;

        res.json({
            itemes: json
        })
    })
 }catch(err){
    err.json({erro: 'producto no encontrado'})
}
})

app.post('/api/productos/guardar', (req,res) =>{
    try{
        fs.promises.readFile('./productos.json').then(data => data.toString('utf-8')).then(datos => {
            let json = JSON.parse(datos);
            json.id = `${datos.length}`;
    
            res.json({
                itemes: json
            })
    })
    if(true){
        fs.promises.writeFile('./productos.json', 
    JSON.stringify(datos,null,'\t'),'utf-8')
    if (err) throw err;
    console.log('el archivo esta a salvo');
    }
}catch (err){
    console.log("no hay producto");
}
})


app.delete('/Bienbenida', (req,res) =>{
    res.send("se elimino el requerimiento /Bienbenida")
})




app.get("/index.html",function (req,res){
    res.sendFile(__dirname + "/" + "./index.html")
})

app.post("/mostrardatos",urlencodedParse, function (req,res) {
    res.json({ datos: `hola ${req.body.nombre} ciudadana de mexico ${req.body.ciudad}`})
})

//app.use(express.static('in'));
app.use("/api", routes);
app.use("/save", productos)
const server = app.listen(3500, () => {
    console.log("puerto 3500");
})
