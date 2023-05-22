const locationModel = require('../../db/models/locations.model')

class location {

static addLocation=async (req,res)=>{
console.log(req.body)

try {
    const { category, name, locations, details } = req.body;
    if (!category || !name || !locations ||!details ) throw new Error('Invalid input!')
    const newPlace = new locationModel({ category, name, locations, details });
    const savedPlace = await newPlace.save();
    res.json(savedPlace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

}

static getspacificLoctions = async(req,res) => {
   
try {
    const { longitude, latitude } = req.query;
    if (!longitude || !latitude) throw new Error('Coordinates are required!');
        const places = await locationModel.find({locations:{$near:{$geometry:{coordinates:[parseFloat(longitude), parseFloat(latitude)] 
           
        ,type:'Point'},$maxDistance:1000}}})

    res.json(places);
  } catch (error) {
    res.status(500).json({ message: error.message });
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