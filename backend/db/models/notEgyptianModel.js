const mongoose=require('mongoose')
const validator=require('validator')
const notEgyptianSchema=mongoose.Schema({
 internationalID:{
    type: String,
    required: [true, 'please enter your national id Number'],
    unique: true,
    validate(value) {
        const reg = /^[0-9A-Za-z]{1}[0-9]{8}$/
        if (!reg.test(value)) {
            throw new Error('this syndicate Number is not valid')
        }
    }
},
 passportImage:{
    type: String,
    required: [true, 'please enter your front national ID Image'],
    trim: true,
},
 gender:{
    type: String,
    required: [true, "enter your gender"],
    enum: ['male', 'female'],
    trim: true,
    lowercase: true
},
 email:{
    type: String,
    validate:
        [
            validator.default.isEmail, "email not valid"
        ],
    trim: true,
    unique: true,
    sparse:true,
    lowercase: true
},
})
const notEgyptianModel=mongoose.model('notegyptianDetails',notEgyptianSchema)
module.exports=notEgyptianModel