import Mongoose from "mongoose";


const productSchema = new Mongoose.Schema({
    product: String,
    category: String,
    stock: Number
})

const products =  Mongoose.model('products', productSchema);

module.exports= products;