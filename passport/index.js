const express = require('express')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path')

const app = express()

app.use(express.urlencoded({
    extended: false
}))
app.use(express.text());

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static(path.join(__dirname, 'views')));



passport.use(new LocalStrategy(
    function(username, password, done){
        User.findOne({username: username}, function(err, user){
            if(err){return done(err)}
            if(!user){return done(null, false, {message: 'Incorrect username.'})}
            if(!user.validPassword(password)){
                return done(null, false, {message: 'Incorrect password.' })
            }
            return done(null, user);
        })
    }
))

app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

app.listen(8080, ()=>{
    console.log('listen 3000');
})