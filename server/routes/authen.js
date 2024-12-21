const express=require("express"); 
const router=express.Router();
const mongo=require('mongoose')
const User=mongo.model("User")
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
user =new User (
    {
        name,email,password

    }
)


user.save().then((savedresult)=>{

res.json({result:"successful"})

}).catch((error)=>{
    res.json({result:error})

})


}
    
).catch((error)=>{
    res.json({result:error})

})
})


module.exports=router 
