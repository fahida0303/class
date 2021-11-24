"use strict";
var express = require("express");
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.set("view engine", "ejs");
app.set("views", "./public");
app.use(express.static(path.join(__dirname, 'public')));
app.get('/new-message', function (req, res) {
    res.send("hello..");
});
var messages = [];
app.get('/', function (req, res) {
    res.render('index', 'messages');
});
io.on('connection', function (socket) {
    console.log("cliente conectado");
    io.emit('message', "Hola usuario");
    socket.on('messages', function (data) {
    });
    socket.on('new-message', function (data) {
        messages.push(data);
        io.socke.emit('messages', 'messages');
    });
});
server.listen(8080, function () {
    console.log("ecuchando el puerto 5000");
});
