const express=require("express"); 
const router=express.Router();
const mongo=require('mongoose')
const User=mongo.model("User")
const bcrypt=require("bcryptjs")
const {jwtkey}=require("../keyvalue")
const jwt= require("jsonwebtoken");
const auth = require("../middleware/auth");
router.get("/", (req,res)=>{
res.send("hi computer") 
})

router.get("/protected",auth,(req,res)=>{
res.json({outcome:"loged in successfully"})


})

router.post("/signup",(req,res)=>{
    //console.log(req.body.name)
    const {name,email,password}=req.body
     if(!name||!email||!password){

        res.json({err:"problem 324567"})
     }

  
    //res.json({sucess:"678440"})

User.findOne({email:email}).then((feed)=>{
    
if(feed){
res.status(422).json({err:" you have an email already"})
}


bcrypt.hash(password,12).then((hashedpw)=>{
    console.log(hashedpw)
    user =new User (
        {
            name,email,password:hashedpw
    
        }
    )
    //okay 
    
    user.save().then((savedresult)=>{
    
    res.json({result:"successful"})
    
    }).catch((error)=>{
        res.json({result:error})
    
    })
}).catch(
(err)=>{

console.log(err)
}


)



}
    
).catch((error)=>{
    res.json({result:error})

})
})




router.post("/signin",(req,res)=>{
const {email,password}=req.body
if(!email){
return  res.json({err:"no email entered"})
}
if(!password){
   return  res.json({err:"no password  entered"})
}

User.findOne({email:email}).then((details)=>{
    console.log(details)
bcrypt.compare(password,details.password).then((truth)=>{
    
    if (truth) {
        const token = jwt.sign({ id:details._id }, jwtkey);
        console.log("//");
        return res.json({ token: token });
    } else {
        return res.json({ err: "wrong email or password" });
    }

}

).catch(( err)=>{console.log(err)})


}).catch(( err)=>{console.log(err)})

})

module.exports=router 
