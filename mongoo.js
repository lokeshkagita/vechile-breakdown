const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/mechneu")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const  detailSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    model:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true
    },
    clocation:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true  
    }


}
);
const details = mongoose.model("details",detailSchema)
module.exports= details
