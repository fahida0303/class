let socket = io();
socket.on('messages', data =>{
    console.log(data);
    render(data);
})

function render(data){
    let html = data.map(function(elem,index){
        let fecha = new Date().toISOString().
        replace(/T/, ' ').replace(/\..+/, '')
        return(`
        <div>
        <strong>${elem.author}</strong>:
        <em>${elem.text}</em>
        <span>${fecha}</span>
        </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
    let mensaje = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value
    };
    socket.emit('new-message', mensaje);
    return false;
}