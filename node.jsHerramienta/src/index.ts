import { strict } from "assert/strict";

let socket = io();
socket.on('messages', function(data:string){
    console.log(data);
    render(data);
})

function render(data:string){
    let html =  Object.keys(data).forEach(function(elem:any,index:any){
        let fecha = new Date().toISOString().
        replace(/T/, ' ').replace(/\..+/, '');
        return(`
        <div>
        <strong>${elem.author}</strong>:
        <em>${elem.text}</em>
        <span>${fecha}</span>
        </div>`)
    }).join(' ')
    let page =  (document.querySelector('messages')as HTMLInputElement).innerHTML = html;
}

function addMessage(e:any) {
    let mensaje = {
        author: (document.getElementById('username') as HTMLInputElement).value,
        text: (document.getElementById('text')as HTMLInputElement).value
    };
    socket.emit('new-message', mensaje);
    return false;
}