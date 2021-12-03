const { makeExecutableSchema } = require('@graphql-tools/schema');
const {resolvers} = require('./resolvers');

const typeDefs = `

type Products{
    id: ID!
    producto: String!
    stock: Int!
    categoria: String!
}


type Query{
    createProducts: Products!
    productsCount: Int!
    allProducts: [Products]!
}


`;


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolve: resolvers
})
