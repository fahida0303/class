const products = require('../model/tablamsql')
export const  resolvers = {
    Query:{
        createProducts({input}) { const newProducts = new products(input)
            console.log(newProducts)},
        productsCount: () => products.length,
        allProducts: () => products
    }
}