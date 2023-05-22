const validator = require('validator')
const mongoose = require('mongoose')
const bcrybt=require('bcrypt')
const userSchema = mongoose.Schema({
    userType: {
        type: String,
        enum: ['lawyers', 'citizens','students'],
        required: true,
        trim: true,
        lowercase: true
    },
    checked:{
        
        type:Boolean,
        validate(value){
            if(value&&(((this.userType=='lawyers'||this.userType=='students')&&(!this.userData||!this.userDetails))||(this.userType=='citizens'&&!this.userDetails))){
                throw new Error(`this user did not complete his required data 
                wait until he completes it then check him again`)
            }
        },
        default:false,
    },
    name: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'the name is required field'],
        minlength: 7
    },
    arName: {
        type: String,
        trim: true,
        lowercase: true,
        required: [function type() {
            return this.userType == 'lawyers'
        }, 'the name is required field'],
        minlength: 7
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'the password is required field']
    },
    // choosenLang: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     required:[true,'please enter the languages you want to deal with'],
    //     ref: 'languages'
    // },
    phone: {
        type: String,
        required: [true, "please enter your phone number"],
        trim: true,
        unique: true,
        validate(value) {
            let val = value.split(':')
            if (!validator.isMobilePhone(val[1], val[0])) {
                throw new Error('this mobile number invalid')
            }
        }
    },
    image: {
        type: String,
        trim: true,
        default: 'defaultuserimage.png'
    },
    nationality: {
        type: String,
        trim: true,
        set(value){
            return value+"Details"
        },
        get:(value)=>{
            return value.replace('Details','')
        },
        lowercase: true,
        required: true,
        validate(value) {
            if (this.userType == 'lawyers' && value != 'egyptianDetails') {
                throw new Error(`sorry Egyptians lawyers only are allowed for this phase
                 wait the next phase we will allow another nationalities soon`)
            }
        }
    },
    userData: {
        type: mongoose.SchemaTypes.ObjectId,
        refPath: 'userType'
    },
    userDetails: {
        type: mongoose.SchemaTypes.ObjectId,
        refPath: 'nationality'
    },notifications:[{
        message:{
            type:String,
            trim:true,
            required:true,
        },
        seen:{
            type:Boolean,
            default:false,
        }
    }]

    //     ,
    // dateCreate:{

    //     type:Date,
    //     default:Date,
    //     expires:600

    // },
    // address:{
    //     type:String,
    //     required:[true,"please enter address"],
    //     minlength:10,
    // }
},{
    toJSON:{getters:true},
    toObject:{getters:true}
})
userSchema.pre('save', function () {
    if (this.isModified('password')) this.password = bcrybt.hashSync(this.password,12)
})
userSchema.methods.toJSON = function () {
    const userObject = this.toObject()
    delete userObject.__v
    delete userObject.password
    return userObject
}
userSchema.virtual('myConsultationsTask',{
    ref:'consultations',
    localField:'_id',
    foreignField:'lawyerDetails'
})
userSchema.virtual('myConsultationsMade',{
    ref:'consultations',
    localField:'_id',
    foreignField:'citizenDetails'
})
const userModel = mongoose.model('users', userSchema)
module.exports = userModel