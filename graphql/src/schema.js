export default `
    type products{
        _id: String!,
        product: String!,
        category: String!,
        stock: Int!
    }

    type Query {
        allproducts: [products!]
    }

    type Mutation{
        createProduct( product: String!,category: String!, stock: Int!): products!,
        updateproduct(_id: String!, stock: Int!): products!
    }
`;