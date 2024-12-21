const express=require("express"); 
const router=express.Router();
const mongo=require('mongoose')
const User=mongo.model("User")
const bcrypt=require("bcryptjs")
router.get("/",(req,res)=>{
res.send("hi computer") 




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
res.json({err:"no email entered"})
}
if(!password){
    res.json({err:"no password  entered"})
}

User.findOne({email:email}).then((details)=>{

bcrypt.compare(password,details.password).then((truth)=>{

truth?res.json({err:"signed in"}):res.json({err:"wrong email or password "})

}

).catch(( err)=>{console.log(err)})


}).catch(( err)=>{console.log(err)})

})

module.exports=router 
