const mongoose=require('mongoose')
const fileSchema=mongoose.Schema({
    file:{
        type:String,
        required:true,
        trim:true
    },
    icon:{
        type:String,
        required:true,
        trim:true
    },
    engName:{
        type:String,
        required:true,
        trim:true
    },
    arName:{
        type:String,
        required:true,
        trim:true
    }
})
const fileModel=mongoose.model('files',fileSchema)
module.exports=fileModel