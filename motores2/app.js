import { error } from "console";
import e from "express";
import express, { query } from "express";
import handlebars from "express-handlebars";

//const productos = require("./productos.json")

let app = express();
let path = require("path");
let datos  = require("./productos.json");


app.engine("hbs", handlebars({
    extname: ".hbs",
    defaultLayout: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials"
}))

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.get("/mostrardatos", (req, res) => {
    res.render("layouts/index");
})

app.post("/mostrardatos", function (req, res, next) {
    if (!req.productos) {
        const error = new Error("No se encontro el archivo");
        return next(error)
    }
    res.send(req.productos)
})


app.get("/lista/productos", (req, res) => {
        res.render("layouts/productos",{datos: datos});
})




app.listen(8080, (req, res) => {
    console.log("puerto 8080");
})