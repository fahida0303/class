const mongoose = require('mongoose');


const url = `mongodb+srv://140324:${140324}@cluster0.wlk1m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url).then(()=>{
    console.log('database connected');
}).catch(err =>{
    console.log(err);
});


const carsSchema = mongoose.Schema({
    producto: String,
    categoria: String,
    stock: Number
})


const carsData = mongoose.model('carsData', carsSchema, );
module.exports = carsData;
