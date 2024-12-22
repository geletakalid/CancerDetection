const express=require("express")
const app=express()
const port=5000
const {mongouri}=require("./keyvalue.js")
const { default: mongoose } = require("mongoose")
const promiddleware=(req ,res,next)=>{
    // console.log(mongouri)
        console.log("high")
        next()
    
}
app.use(express.json());


mongoose.connect(mongouri)
mongoose.connection.on('connected',()=>{

console.log("cool2")

})
require('./models/user.js')
require('./models/posts.js')
//4MoTnC6yxynfRQlE

app.use(require('./routes/authen.js'))
app.get('/',promiddleware,(req ,res)=>{res.send("hi")})
app.listen(port,()=>{
    console.log("cool")
 })
