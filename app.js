const express = require("express")
const collection = require("./mongo")
const details = require("./mongoo")
const mechdatas = require("./mongooo")
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const users = mongoose.model("details");
require("./mongoo");




app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/mlogin",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await mechdatas.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/msignup",async(req,res)=>{
    const{email,password,location}=req.body

    const data={
        email:email,
        password:password,
        location:location
    }

    try{
        const check=await  mechdatas.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await mechdatas.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.post("/bookings",async(req,res)=>{
    const {name,model,msg,clocation,number}=req.body
    const datas = {
        name:name,
        model:model,
        msg:msg,
       clocation:clocation,
       number:number
    }
    await details.insertMany([datas])
    
})

app.listen(8000,()=>{
    console.log("port connected");
})

app.get('/getData',async (req,res)=>{
    try{
   const alldata = await users.find({name:"1234"});
res.send({status:"ok", data: alldata});
    }catch(error) {
        console.log(error);
    }
});