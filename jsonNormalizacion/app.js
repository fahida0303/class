import express from 'express';
import mongoose from 'mongoose';
import flash from 'flash'
import {
    normalize,
    schema
} from 'normalizr';
import path from 'path';
import router from './rutas/login.mjs';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import passport from 'passport';
import createStrategy from 'passport-local';
const MongoStore = require('connect-mongo');




const app = express();
const model = require('./src/model');
const server = require('http').Server(app);
const io = require('socket.io')(server);



let messages = [];
//let messages= [{username:"lola", text:"como esta"},{username:"tomaa", text:" esta"}
const usermessage = new schema.Entity('messages');
const myShema = {
    messages: [usermessage]
}
const normalizedChat = normalize(messages, myShema)


app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());
app.use(express.text());

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, 'views')));
app.use("/rutas", express.static('./rutas/'));

app.use(cookieParser());
app.use(session({

    /* -------------------------- Persistencia de database en mongo atlas ----------------------------------- */
     store: MongoStore.create({
        mongoUrl: 'mongodb+srv://140324:140324@cluster0.wlk1m.mongodb.net/dbsistema?retryWrites=true&w=majority',
        useNewurlParser: true,
        ttl:600
    }),


    secret: 'keysession',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 600000
    }
}))


app.use(passport.initialize());
app.use(passport.session());
app.use(flash()) 




 app.use( (req,res, next) =>{
    const oneMinute = 60*10*1000;
    const creationData = req.session.creationData;
    const expires = oneMinute + creationData;
    const ttl = expires - Date.now();

    req.session.cookie.maxAge = ttl;
    next();

})







app.get("/new-message", (req, res) => {
    res.render("index", messages)
})





io.on('connection', function (socket) {
    console.log('se conecto un cliente');
    socket.emit('messages', messages);

    socket.on('new-message', function (data) {
        messages.push(data);
        io.sockets.emit('messages', messages);

    })

})

app.post('/guardado_user', (req, res) => {
    messages = req.body;
    const newmessage = new model(req.body);
    newmessage.save();
    res.json(messages)
})

console.log(JSON.stringify(normalizedChat));








app.use('/', router);

server.listen(4000, () => {
    console.log('puero 4000');
})