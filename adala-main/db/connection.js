const mongoose=require('mongoose')
mongoose.set('toJSON',{getters:true})
try {
    mongoose.set('strictQuery', false)
    // mongoose.connect('mongodb://127.0.0.1:27017/adala',{useNewUrlParser:true,useUnifiedTopology:true,autoIndex:true})
    mongoose.connect('mongodb+srv://adala:123456mA@cluster0.fcrk8dh.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true,autoIndex:true}). then( async() => {
 
//     console.log("done")
//    await app.listen(8000,()=>{
//         console.log("server done")
        
//     })
     console.log("ddddd")

})
    
} catch (error) {
    console.log(error)
}