const mongoose = require('mongoose')
const validator = require('validator')

const ClocksModel = mongoose.Schema({
    hours:{
        type:Number,
        require:[true,"enter the hour"],
        max:[23,"enter the hours betweea {00,23}"]
    },
    minutes:{
        type:Number,
        // require:[true,"enter the minutes"],
        default:0,
        max:[59,"enter the hours betweea {00,23}"]
    },

    position:{
        type:String,
        enum:["Admin","customerService","markting"],
        required: [true, 'enter the position of employee']
    },

    emailCusromerSerive:{
            type: String,
            validate:
            [
                validator.default.isEmail, "email not valid"
            ],
            required: [function type() {
                return this.position == 'customerService'
            }, 'the email of customer serivce is required field'],
            trim: true,
            // unique: true,
            lowercase: true
    }

})
const clocksModel = mongoose.model('clocksModel', ClocksModel)
module.exports = clocksModel