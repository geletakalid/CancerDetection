const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Post=mongoose.model("Post")
router.post('/createpost',auth,(req,res)=>{
     const {title,body}=req.body
    if(!title||!body){
        res.status.json({err:"title or body missing"})
    }
    post =new Post(
        {
           
            title,body 
        }
    )

})

module.exports=router

