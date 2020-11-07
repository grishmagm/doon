const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = {
 
  google:{
    clientID:"699202683475-n8ilrnmeu62uvol04aguqdelethdg5tk.apps.googleusercontent.com",
    clientSecret:"d8-p8ihkXzzug8lh6dtAxPCz"
  }
 
};
//const productSchema = new mongoose.Schema({
    
    // name: String,
    //quantity: String,
   // unit: String,
   // price:String
//});


//module.exports = mongoose.model("Product",productSchema);
module.exports = mongoose.model("User",userSchema);