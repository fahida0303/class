const express = require("express");
const path = require('path')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set("view engine", "ejs");
app.set("views", "./public");
app.use(express.static(path.join(__dirname, 'public')));

app.get('/new-message', function (req:any,res:any){
    res.send("hello..")
})

const messages = [];

app.get('/', (req:any,res:any)=>{
    res.render('index', 'messages');

})


io.on('connection', function (socket:any){
    console.log("cliente conectado");
    io.emit('message',"Hola usuario")

    socket.on('messages',function(data:string){

    })

    socket.on('new-message', (data:string) =>{
        messages.push(data);
        io.socke.emit('messages','messages')
    })
})


server.listen(8080, () => {
    console.log("ecuchando el puerto 5000");
})