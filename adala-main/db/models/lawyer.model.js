const mongoose = require('mongoose')
const validator=require('validator')
const workAreaSchema = mongoose.Schema({
    gov: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'please enter your governament'],
        ref: 'governorates'
    },
    subSyndicate: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'please enter your subsyndicate'],
        ref: 'subsyndicates'
    },
    district: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'please enter your district'],
        ref: 'districts'
    }
})
const officeSchema=mongoose.Schema({
    address:{
        type:String,
        required:[true,'please enter your address'],
        trim:true,
    },
    // location:{
    //     tyoe:mongoose.SchemaTypes.ObjectId,
    //     ref:'locations'
    // },
    workingDays:{
        type:[String],
        enum:[],
        lowercase:true,
        trim:true,
        required:[true,'please enter your work days']
    }, 
    phone: {
        type: String,
        required: [true, "please enter your phone number"],
        trim: true,
        validate(value) {
            let val = value.split(':')
            if (!validator.isMobilePhone(val[1], val[0])) {
                throw new Error('this mobile number invalid')
            }
        }
    },
    // periods:[{
    startTime:{
        type:Number,
        min:0,
        max:24,
        required:[true,'please enter when do you start work at this office']
    },
    finishTime:{
        type:Number,
        min:0,
        max:24,
        required:[true,'please enter when do you close this office']
    }
    // }]
})
const lawyerSchema = mongoose.Schema({
    category: {
        type: [String],
        required: [true, 'please enter your category'],
        enum: ['مدني', 'جنائي', "اسرة", "عمال", "شركات", "جناح", "عسكري",],
        trim: true,
        validate(value) {
            if (value.length > 3) {
                throw new Error('you can add until three categories only')
            }
        }
    },
    syndicateNum: {
        type: String,
        required: [true, 'please enter your syndicate Number'],
        unique: true,
        validate(value) {
            const reg = /^[0-9]{14}$/
            if (!reg.test(value)) {
                throw new Error('this syndicate Number is not valid ')
            }
        }
    },
    syndicateCardImage: {
        type: String,
        required: [true, 'please enter your front national ID Image'],
        trim: true,
    },
    taxesNum: {
        type: String,
        required: [true, 'pleas enter your syndicate Number'],
        unique: true,
        validate(value) {
            const reg = /^[0-9]{3}\-{1}[0-9]{3}\-{1}[0-9]{3}$/
            if (!reg.test(value)) {
                throw new Error('this taxes Number is not valid ')
            }
        }
    },
    taxesRecordImage: {
        type: String,
        required: [true, 'please enter your front national ID Image'],
        trim: true,
    },
    syndiacateRecordedWorkArea: {
        type: workAreaSchema,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 200
    },
    replyForLegalAdviceWithSpacificTime: {
        type: Boolean,
        // required: true
    },
    description:{
        type:String,
        trim:true
    },
    offDays:{
        type:[Date],
    },
    personalAppointment:[{
        appointmentDetails:{
            type:String,
            required:true,
            trim:true
        },
        appointmentDate:{
            type:Date,
            required:true
        }
    }],
    numbersOfReviews:{
        type:Number,
        default:0,
        min:0
    },
    totalRate:{
        type:Number,
        min:1,
        max:5,
        default:1
    },
    isPremium:{
        type:Boolean,
        default:false,
    },
    officesData:{
        type:[officeSchema],
        // required:true,
        // validate:{validator:function(value){
        //     return value.length>=1
        // },message:'you have to enter an office at least'}
    }
})

const lawyerModel = mongoose.model('lawyers', lawyerSchema)
module.exports = lawyerModel