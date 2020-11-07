const passport = require("passport");
const session =  require('express-session')
const GoogleStrategy = require("passport-google-oauth2").Strategy;
//const facebookStrategy = require("passport-facebook").Strategy;
const User = require("./model/User");


passport.serializeUser(function(user,done){
    done(null,user);

});
passport.deserializeUser(function(user,done){
    done(null,user);

});
passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:  process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
      console.log(profile)
    User.findOne({ googleId: profile.id }, function (err, profile) {
      return done(null, profile);
    });
  }
  ));
  //passport.use(new facebookStrategy({
    //clientID:"277869900194350",
   // clientSecret: "5bf526a9ca35ef847615c0fa6a087db0",
    //callbackURL:  "https://3000-ce8c75bc-7e05-4d01-93c9-2ab3a817709c.ws-us02.gitpod.io/facebook/callback",
   // profileFields:['id','displayName','name','gender','picture.type(large)','email']
  //},
  //function(request, accessToken, refreshToken, profile, done) {
      //console.log("facebook")
    //User.findOrCreate({ googleId: profile.id }, function (err, profile) {
    //  return done(null, "facebook");
    
 // }
//));
