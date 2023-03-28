const locationModel = require('../../db/models/locations.model')

class location {

static addLocation=async (req,res)=>{
//   const a = JSON.stringify( req.body)
//     const {arr,details,category,name} =a 
console.log(req.body)
// const lang = "30.0271337221124"
// const lat = "30.0271337221124"

    const {lat,lang,name,category,details} = req.body
    try {
        const locationdb =await new locationModel({locations:{ coordinates:[parseFloat(lang),parseFloat(lat)]},name:name,category:category,details:details})
        const result=await locationdb.save()
        console.log(result)
    
    res.status(200).json({message:'created succesful' , body:result})
} catch (error) {
    res.send(error.message)
    
}


}

static getspacificLoctions = async(req,res) => {

// const {coordinates} =  req.body
// console.log(coordinates)
    try {
// const a = new Date()
// const x= 10 
// const q = 12
// console.log(a.getHours()==x&&a.getMinutes()==q)

        const a = await locationModel.find({locations:{$near:{$geometry:{coordinates: coordinates
           
        ,type:'Point'},$maxDistance:1000}}})
res.send(a.getDate())

        
    } catch (error) {
res.send(error.message)
        
    }
  
}



static getlocationByName = async (req,res) => {
const {serchkey} = req.params
const {id} = req.params
//id = 1 means that search will be by name
//id = 2 means that search will be by category

    try {
console.log(serchkey)

switch (id) {
    case "1":
        const locationSearch = await locationModel.find({name:{$regex:serchkey}})
        
        res.send({message:'created succesful' , body:locationSearch})
        break;
        case "2":
            const locationSearchCategory = await locationModel.find({category:{$regex:serchkey}})
            res.send({message:'created succesful' , body:locationSearchCategory})
        
        break;
    default:
        break;
}


        
    } catch (error) {
    res.send(error.message)
        
    }
  
}

}
module.exports=location