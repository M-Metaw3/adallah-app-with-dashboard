const mongoose = require('mongoose')

const places=mongoose.Schema({

 category:{
    type:String,
    enum:["محاكم","اقسام","نيابات","غرف تجارية","اشهر عقارية","سجلات تجارية","مأموريات ضرائب ","هيئات استثمار"]
 },
name:{
   type:String,
   require:[true,"enter name"]
},


locations:{
   coordinates:{
      type: [Number],
      required: [true,"please ener nubers"],
      index:"2dsphere",
      trim: true,
    
   },
   type:{
      type:String,
      default:"Point"
   }
}
,

 details:{
    type:String
 }

})

places.index({locations:"2dsphere"})
const placeses = mongoose.model("places",places)

module.exports=placeses