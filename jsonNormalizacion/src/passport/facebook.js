import passport from 'passport';
import facebookStrategy from 'passport-facebook';


const FACEBOOK_CLIENT_ID = '4728750850509998';
const FACEBOOKK_CLIENT_SECRET = 'f25b913a78939661530e2f94e8fdd652';
const passportFacebook = function(router) {
 
    passport.use(new facebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOKK_CLIENT_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photo', 'emails'],
    scope:['email']
},
function(accessToken, refreshToken,profile,done){
    console.log(profile);
    let userProfile = profile;
    return done(null,userProfile)
}
));
}

module.exports =   passportFacebook;