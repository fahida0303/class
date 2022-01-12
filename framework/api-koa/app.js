const { async } = require("rxjs");

const koa = require('koa');
const koabody = require('koa-body')

const app = new koa();

app.use(koabody());

const products = require('./products')
app.use(products.routes())

// app.use(async ctx => {
//     ctx.body = 'hello world';
// });



app.listen(3000, ()=>{
    console.log('escuchando..');
})