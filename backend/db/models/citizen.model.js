const mongoose = require('mongoose')
const citizenSchema = mongoose.Schema({
    paymentsDone: {},
})
const citizenModel = mongoose.model('citizens', citizenSchema)
module.exports = citizenModel