"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = io();
socket.on('messages', function (data) {
    console.log(data);
    render(data);
});

function render(data) {
    var html = Object.keys(data).forEach(function (elem, index) {
        var fecha = new Date().toISOString().
        replace(/T/, ' ').replace(/\..+/, '');
        return ("\n        <div>\n        <strong>" + elem.author + "</strong>:\n        <em>" + elem.text + "</em>\n        <span>" + fecha + "</span>\n        </div>");
    }).join(' ');
    var page = document.querySelector('messages').innerHTML = html;
}

function addMessage(e) {
    var mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value
    };
    socket.emit('new-message', mensaje);
    return false;
}