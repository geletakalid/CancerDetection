const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Post=mongoose.model("Post")
const auth= require("../middleware/auth")
router.get('/allposts',(req,res)=>{
Post.find().populate("postedby","_id name").then((posts)=>{

    res.json(posts)

})

})
router.post('/createpost',auth,(req,res)=>{
   // console.log(req.user)
     const {title,body,name}=req.body
    if(!title||!body||!name){
        res.status(422).json({err:"title or body missing"})
    }
    console.log("coool")
   const post =new Post(
        {
           
            title,body ,name ,postedby:req.user
        }
    )
    post.save().then((saved)=>{
        console.log(saved)
        res.json({done:"true"})
    })

})
router.get("/myposts",auth,(req,res)=>{
Post.find({postedby:req.user._id}).populate("postedby").then((obj)=>{
    res.json(obj)
})


})

module.exports=router

