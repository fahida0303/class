import express from 'express'
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
const app = express();
const products = require('./models/products')
const schema = require('./schema');
const resolver = require('./resolver');


const urlDB = "mongodb+srv://140324:140324@cluster0.wlk1m.mongodb.net/graphql-proof?retryWrites=true&w=majority"
mongoose.connect(urlDB,{useNewUrlParser: true})
.then(()=> console.log('connet database'))
.catch(err => console.log(err))

const SERVER = new ApolloServer({
    schema,
    resolver,
    context: {
        products
    },
    introspection: true,
    playground:  true,
    playground:{
        endpoint:`http://localhost:3000/graphql`,
        settings:{
            'iditor.theme' : 'dark'
        }
    }
});

SERVER.applyMiddleware({

});

app.set('port', process.env.PORT || 3000);

app.listen(server.get('port'), () => {
    console.log('server is running', server.get('port'));
})