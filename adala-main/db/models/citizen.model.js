const mongoose = require('mongoose')
const citizenSchema = mongoose.Schema({
    religion: {
        type: String,
        enum: ["Muslim", "Christian", 'Jewish'],
        required: [true, "enter your religion"]
    },gender: {
        type: String,
        required: [true, "enter your gender"],
        enum: ['male', 'female'],
        trim: true,
        lowercase: true
    },
    paymentsDone: String,
})
const citizenModel = mongoose.model('citizens', citizenSchema)
module.exports = citizenModel