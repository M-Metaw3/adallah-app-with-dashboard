const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    comment: {
        type: String,
        trim: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    }

})
const procurationSchema=mongoose.Schema({
    status:{
        type:String,
        enum: ["not asked","pending","accepted","seen"],
        default:"not asked",
        set:(value)=>{
            if(value=='seen'){
                this.seenTime=new Date()
            }
            return value
        }
        },
        seenTime:{
            type:Date,
        }
})
const consultationSchema = mongoose.Schema({
    status: {
        type: String,
        enum: ["accepted", "pending", "reschedualing", "paid", "completed"],
        default: "pending",
    },
    procuration:{
        type:procurationSchema,
    },
    consultationOffice:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'lawyers'

    },
    payment:{
        type:mongoose.SchemaTypes.ObjectId,
        required:()=>{
            return this.status=='paid'
        },
        ref:'payments'
    },
    date: {
        type: Date,
        default: new Date(),
    },
    datebooking: {
        type: Date,
        required: [true, "please enter your booking Date"],
        validate:{validator:date=>{(new Date(((new Date()).toLocaleDateString()).toString())-date)>=0},message:v=>`${v.value} is not valid date`}
    },
    clock: {
        type: Number,
        required: [() => {
            return this.statusOfconsulting == "accepted"
        }, "please enter the consultation booking clock"]
    },
    message: {
        type: String
    },

    lawyerDetails: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    citizenDetails: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    review: {
        type: reviewSchema,
    }

})
const consultationModel = mongoose.model('consultations', consultationSchema)
module.exports = consultationModel