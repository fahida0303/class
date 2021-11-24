const http = require('http');

function random(max,min){
    return Math.floor(Math.random() * (max-min)) + min;
}

http.createServer((req,res)=>{
    const {url, method, headers} = req

    let obj = {
        id : random(1,10),
        title : `Producto  ${random(1,10)}`,
        price: random(0.00,9999.99),
        thumbnail: `Foto ${random(1,10)}`

    }
    res.end(JSON.stringify(obj))

    
}).listen(3500, function(){
    console.log(this.address().port)
});
