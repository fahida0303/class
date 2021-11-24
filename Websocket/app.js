import express from "express";
const path = require('path')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const info = require('./productos.json')


app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", "./public");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/mensajes", (req,res) =>{
    res.render("index",{info: info})
})

io.on('connection', (socket) =>{
    console.log('cliente conectado' + socket.id);
    socket.emit("message", info)


 socket.on('keyup',(data)=>{
        console.log(data);
        io.sockets.emit('message', info)
        info.push(data)
     })
})


http.listen(3000, () =>{
    console.log("escuchado...");
})