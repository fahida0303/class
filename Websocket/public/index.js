document.addEventListener("DOMContentLoaded", function(){
    const socket = io();
    const inp = document.querySelector("#mensaje")
    socket.on('message', data=>{
        console.log(data);
    })

    inp.addEventListener('keyup',function addMessages(e){

         let payload = {
        producto: document.getElementById('produc').value,
        precio: document.getElementById('price').value,
        imagen: document.getElementById('imag').value
    }
            socket.emit('keyup',  payload);
            return false;
    })

})
