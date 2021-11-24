import   Express from 'express';
import passport from 'passport';
import process from 'process';
import {fork} from 'child_process';
import { parse } from 'path';
import nodemailer from 'nodemailer';
const cookieParser = require('cookie-parser');
require('../src/passport/facebook')(passport);



let router = Express.Router();



router.use(cookieParser());


router.get('/', (req,res) =>{
    res.render('session', { message: req.flash('message') })
 })

router.get('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true  
}));

router.post('/register',/*passport.authenticate('register')*/(req,res) =>{
    const { email, password } = req.body;
    console.log(req.body);
    req.session.user_data = {email, password};
    if(req.session.user_data){
        res.redirect('/welcome')
    }else{
        res.redirect('logout')
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'petra.jast29@ethereal.email',
            pass: 'hn8YASzbMh7gZs3N8z'
        }
    });

    const mailOption = {
        from: 'server Node.js',
        to: ['fahidarios@gmail.com', 'mandy.schroeder@ethereal.email'],
        subject: 'mail de prueba',
        html: '<h1 style="color: blue;"> prueba con <span style="color: green;">Node.js con Nodemailer</span></h1>'
    }
    transporter.sendMail(mailOption, (err, info) =>{
        if(err){
            console.log(err);
            return err
        }
        console.log(info);
    })
})



router.get('/auth/facebook/', passport.authenticate('facebook'));
router.get("/auth/facebook/callback",
passport.authenticate('facebook', {
  successRedirect: "/",
  //failureRedirect: "/fail"
}))



router.get('/welcome', (req, res, next) => {
    const user =req.session.user_data;
    //delete req.session.user_data;
    res.render('welcome', {user})
    

});


router.get('/logout', (req, res, next) => {
    const user =req.session.user_data;
    res.clearCookie('email');
    res.render('logout', {user});
});


router.get('/info', (req,res) =>{
    let datos = {
    directoty_actual_trabajo: process.cwd(),
    titulo_process: process.title,
    node_version: process.version,
    uso_memoria: process.memoryUsage(),
    Id_process: process.getgid,
    }
    res.json(datos)
})


router.get('/randoms', (req,res,)=>{
    const randomNumber =  fork('./rutas/child.js');
    
    randomNumber.send(JSON.stringify(req.query));
    
    randomNumber.on('message', (numbers) => {
        res.send(JSON.parse(numbers))
    })
})


router.get("/fail", (req, res) => {
    res.send("Failed attempt");
  });


module.exports = router;