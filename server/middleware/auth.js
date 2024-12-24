const jwt = require("jsonwebtoken")
const {jwtkey}=require("../keyvalue") 
console.log(jwtkey)

const { default: mongoose } = require("mongoose")

const User= mongoose.model("User")

module.exports=(req ,res , next)=>{
    const {authorization}=req.headers

    if(!authorization){

 res.status(401).json({err:"your not logged in"})
    }

    const token=authorization.replace("Bearer ","")
    
    jwt.verify(token,jwtkey,(err,payload)=>{

    if(err){
    res.status(401).json({err:"your not logged in"})
    }

    const {id}=payload
User.findById(id).then((Userdetails)=>{
  
req.user=Userdetails
//console.log(Userdetails)
next()

})

    })


}
