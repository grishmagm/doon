require('dotenv').config()
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
require('./passport-setup');
const passport = require('passport');
const session =  require('express-session');




app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret:'thisissecretkey'}))

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true , useUnifiedTopology: true },()=> console.log("g connect"));
const userRoutes = require("./routes/user");

app.get('/sucess',(req,res)=>{
 console.log("complete");
});


app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/",( req,res)=>{
res.send("ga");
});

app.use("/api/user",userRoutes);
;



app.get('/google',
  passport.authenticate('google', { scope:
    [ 'email', 'profile' ] }
));
app.get( '/google/callback',
    passport.authenticate( 'google' 
       
),function(req,res) {
res.redirect("/sucess");
});
app.listen(3000,()=>{
console.log("g");
});