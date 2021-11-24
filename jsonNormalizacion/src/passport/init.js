const login = require('./login');
const signup = require('./register');
const model = require('../model');



module.exports = function (passport) {

    passport.use(model.createStrategy());
    passport.serializeUser(model.serializeUser(function (user, done) {
        done(null, user.email);
    }));
    passport.deserializeUser(model.deserializeUser(function (id, done) {
        let usuario = usuarios.find(usuario => usuario.email == email); +
        done(null, usuario);
    }));
    login(passport);
    signup(passport);
}