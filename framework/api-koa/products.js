const Router = require("koa-router")

const router = new Router({
    prefix: '/products'
})

let products = [
    {id: 101, product: 'lapiz', categoria: 'dokof'},
    {id: 102, product: 'libro', categoria: 'dok'},
    {id: 103, product: 'camiseta', categoria: 'errf' },
    {id: 104, product: 'pasto', categoria: 'drtr'   }
]


router.get('/', (ctx, next) =>{
    ctx.body = {
        status: 'success',
        message: products
    };
    next();
})

router.get('/:id', (ctx, next) =>{
    let getproduct = products.filter(function(product){
        if(product.id == ctx.params.id){
            return true;
        }
    });
    if (getproduct.length){
        ctx.body = getproduct[0];
    }else{
        ctx.response.status = 404;
        ctx.body = {
            status: 'error!',
            message: 'product not Found with that id!'
        }
    }
    next();
})

router.post('/new', (ctx, next)=>{
    if(
        !ctx.request.body.id ||
        !ctx.request.body.product ||
        !ctx.request.body.categoria
    ){
        ctx.response.status = 404;
        ctx.body = {
            status: 'error',
            message: 'please enter the data'
        }
    }else {
        let newProduct = products.push({
            id: ctx.request.body.id,
            product: ctx.request.body.product,
            categoris: ctx.request.body.categoria,
        });
        ctx.response.status = 201;
        ctx.body ={
            status:  'error',
            message: `new product added witch id: ${ctx.request.body.id}  & product: ${ctx.request.product}`
            
        }
    }
    next();
})


router.delete('/delete/:id', (ctx, next) => {
    let id = ctx.params.id
    let index = products.findIndex(product => product.id == id)
    products.splice(index,1)
    ctx.body = {
        status: 'success',
        message: `product delete with id ${id}`
    }
    next();
})

module.exports = router;