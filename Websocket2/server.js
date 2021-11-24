const express = require("express");
const path = require('path')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.set("view engine", "ejs");
app.set("views", "./public");
app.use(express.static(path.join(__dirname, 'public')));

app.get("/new-message", (req, res) => {
    res.render("index", messages)
})

const messages = [];


io.on('connection', (socket) => {
    console.log('se conecto un cliente');
    socket.emit('messages', messages);

    socket.on('new-message', (data) => {
        messages.push(data);

        io.sockets.emit('messages', "<strong>" + socket.username + "</strong>: " + messages)
    })
})



server.listen(8080, () => {
    console.log("ecuchando el puerto 5000");
})