import { fixSchemaAst } from '@graphql-tools/utils';
import mocha from 'mocha';


class productos {
    constructor(){
        this.products = []
    }
    list(){
        return this.products
    }

    add(producto, categoria, stock){

        let product = {
        producto: producto,
        categoria: categoria,
        stock: stock,
        complete: false
        }

        this.products.push(product)
    }
    complete(product){
        if(this.products.length === 0){
            throw new Error('no hay productos')
        }
        let productFound =false
        this.products.forEach(product =>{
            if(product === product){
                product.complete = true
                productFound = true
            }
        })
        if(!productFound){
            throw new Error('no se encontro el producto')
        }
    }


savetoFilecb(cb){
    let fileContents = ''
    this.products.forEach(product =>{
        fileContents += `${product.productos,product.categoria,product.stock},${product.complete}`
    })
    fs.writeFile('products.txt', fileContents, cb)
}

savetoFilePromise(){
    let fileContents = ''
    this.products.forEach(product =>{
        filrContents += `${product.productos,product.categoria,product.stock},${product.complete}`
    })
    return fs.promises.writeFile('products.txt',filrContents);
}

}

const product = new productos()
console.log(product.list());

product.add("run product")
console.log(productos.list());

product.complete("run product")
console.log(productos.list());