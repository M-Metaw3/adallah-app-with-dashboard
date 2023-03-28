const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    collegeCard:{
        type:String,
        required:[true,'please enter your college card image'],
        trim:true,
    },
    currentYear:{
        type:Number,
        required:[true,'please enter in which grade you are'],
        min:1,
        max:4
    }
})
const studentModel=mongoose.model('students',studentSchema)
module.exports=studentModel