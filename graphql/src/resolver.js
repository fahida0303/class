import { async } from "rxjs";

export default {
    Query: {
        allproducts: async (parent, args, {product}) =>{
            const products = await product.find();
            return products.map(x => {
                x._id = x._id.toString();
                return x;
            })
        }
    },

    mutation: {
        createProduct: async(parent, args, {product}) =>{
            const products = await new product(args).save();
            products._id = products._id.toString();
                return products;
        },

        updateproduct: async(parent, args, {product}) =>{
            const products = await product.findOneAndUpdate({"_id": args._id},
                                                            {"$set":{stock: args.stock}},
                                                            {"new": true});
            products._id = products._id.toString();
            return products
    }
}
}