const mongoose=require('mongoose')
mongoose.set('toJSON',{getters:true})
try {
    mongoose.set('strictQuery', false)
    // mongoose.connect('mongodb://127.0.0.1:27017/adala',{useNewUrlParser:true,useUnifiedTopology:true,autoIndex:true})
    mongoose.connect(process.env.CONNECTIONURL,{useNewUrlParser:true,useUnifiedTopology:true,autoIndex:true}). then( async() => {
 
    console.log("done")
//    await app.listen(8000,()=>{
//         console.log("server done")
        
//     })


})
    
} catch (error) {
    console.log(error)
}