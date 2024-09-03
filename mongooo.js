const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/mechneu")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const  mSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
    
  }


);
const mechdatas = mongoose.model("mechdatas",mSchema)
module.exports= mechdatas
