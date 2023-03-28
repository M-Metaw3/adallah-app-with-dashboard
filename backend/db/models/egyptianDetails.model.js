const mongoose = require('mongoose')
const validator = require('validator')

const egyptianDetailsSchema = mongoose.Schema({
    nationalIdNum: {
        type: String,
        required: [true, 'please enter your national id Number'],
        unique: true,
        validate(value) {
            const reg = /^[0-9]{14}$/
            if (!reg.test(value)) {
                throw new Error('this syndicate Number is not valid ')
            }
        }
    },
    frontNationalIdImage: {
        type: String,
        required: [true, 'please enter your front national ID Image'],
        trim: true,
    },
    backNationalIdImage: {
        type: String,
        required: [true, 'please enter your front national ID Image'],
        trim: true,
    },
    gender: {
        type: String,
        required: [true, "enter your gender"],
        enum: ['male', 'female'],
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        validate:
            [
                validator.default.isEmail, "email not valid"
            ],
        trim: true,
        sparse:true,
        unique: true,
        lowercase: true
    },
    religion: {
        type: String,
        enum: ["Muslim", "Christian", 'Jewish'],
        required: [true, "enter your religion"]
    },
})
const egyptianDetailsModel = mongoose.model('egyptianDetails',egyptianDetailsSchema)
// egyptianDetailsModel.ensureIndexes(function(e){
//     if(e)console.log(e)
// })
// egyptianDetailsModel.on('index',function (e){if(e)console.log(e)})
module.exports = egyptianDetailsModel