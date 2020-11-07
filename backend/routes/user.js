const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

router.post("/register", async (req, res)=>{

    const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
});

    const savedUser = await user.save();
    res.send(savedUser);
    res.json("created successfully");

});
//router.post("/add", async (req, res)=>{

   // const product = new User({
  
    //name: req.body.name,
    //quantity: req.body.quantity,
    //unit: req.body.unit,
    //price: req.body.price
//});

    //const savedProduct = await product.save();
    //res.send(savedProduct);
   // res.json("created gannu");

//});
router.use(cors());


router.post("/login", async (req,res)=>{
    const user =  await User.findOne({email: req.body.email})
if(!user){
    return res.status(400).send("email is wrong");
}
console.log(req.body.password);
console.log(user.password);

await bcrypt.compare(req.body.password,user.password);
if(!req.body.password) return   res.status(400).send("invalid");


const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
res.header("auth-token",token).send({token :token ,user:user});
});



module.exports = router;