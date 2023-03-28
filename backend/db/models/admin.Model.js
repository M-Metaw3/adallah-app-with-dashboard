const mongoose = require('mongoose')
const validator = require('validator')

const adminSchema = mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    email: {
        type: String,
        required:[true,"the email is required field"],
        validate:
            [
                validator.default.isEmail, "email not valid"
            ],
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'the password is required field']
    },
    // con_password: {
    //     type: String,
    //     trim: true,
    //     required: [true, 'the password is required field']
    // },
    image: {
        type: String,
        trim: true,
       require:true
    },
    position:{
        type:String,
        enum:["Admin","customerService","markting"],
        required: [true, 'enter the position of employee']
        
    
    //    required:true
    },
    createdAt:{
        type:Date,
        default:Date
    }, 
    susbended:{
        type:Boolean,
        default:false
    }
})
const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin