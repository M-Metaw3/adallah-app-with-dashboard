const mongoose=require('mongoose')
const PaymentSchema=mongoose.Schema({

})
const paymentModel=mongoose.model('payments',PaymentSchema)
module.exports=paymentModel