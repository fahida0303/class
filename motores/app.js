import express, { query } from "express";
import handlebars from "express-handlebars";

//const productos = require("./productos.json")

let app = express();
let path = require("path");


app.engine("hbs", handlebars({
    extname: ".hbs",
    defaultLayout: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
}))

app.set("views", "./views");
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));
app.get("/mostrardatos", (req, res) => {
    res.render("main", {
        layout: 'index'
    })
})

app.post("/mostrardatos", function (req, res, next) {
    if (!req.productos) {
        const error = new Error("No se encontro el archivo");
        return next(error)
    }
    res.send(req.productos)
})

let datos  = require("./productos.json");

app.get("/lista/productos", (req, res) => {
        res.render("main",{
            layout: "productos",
            productos: datos
            });
})




app.listen(8080, (req, res) => {
    console.log("puerto 8080");
})