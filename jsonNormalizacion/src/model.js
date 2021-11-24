import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://140324:140324@cluster0.wlk1m.mongodb.net/dbsistema?retryWrites=true&w=majority',{useNewurlParser: true});
const con = mongoose.connection;
const passportLocalMongoose = require('passport-local-mongoose');
try{
    con.on('open', () =>{
        console.log('connected');
    })
}catch(error){
    console.log("Error: " + error);

}


const User = new mongoose.Schema({
    email: String,
    password: String,
  });
  
  // Setting up the passport plugin
  User.plugin(passportLocalMongoose);
  
  module.exports = mongoose.model('User', User);

