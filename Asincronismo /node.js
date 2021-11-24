let fin = ()=>{console.log('Proceso completado');}

function mostrarTexto(str,i,callback){
    if(str.length === i){
        fin();
        return;
    }setTimeout(()=>{
        callback(str[i]);
        mostrarTexto(str,i+1,callback)
    },1000)

}

mostrarTexto('Javascript Asincronico',0, (e) => {
    console.log(e);
})