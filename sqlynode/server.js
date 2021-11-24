const {options} = require('./mariaDB');


const express = require('express');
const app = express();
const knex = require("knex")(options);

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res) =>{
    knex('usr').select('*').then(data =>{
        res.json(data)
    })
})


app.post('/new_usr', (req,res) =>{
    const {usr} = req.body;
    console.log(usr);
    knex('usr').insert(usr).then(_=> res.send('listo'))
    
})

app.put("/correct_usr/:id", (req,res) =>{
    const {id} = req.params;
    knex('usr').where({id: 1}).update({name: 'flor'},['id', 'name']).then(_=> res.send('editado'))
})

app.delete('/delete/:id', (req,res) =>{
    const {id} = req.params;
    //knex('usr').where({id}).del().then(_=> res.send('Ok'))
    knex('usr').where({id: 2}).del(id).then(_=>res.send('eliminado'))
})




app.listen(3000,()=>{
    console.log('escucahndo');
})