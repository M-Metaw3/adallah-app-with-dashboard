const egyptianDetailsModel=require('../../db/models/egyptianDetails.model')
const userModel=require('../../db/models/user.model')

const bycrpt = require('bcrypt')
var jwt = require('jsonwebtoken');

class EgyptianDetails {

    static addDetails =async(req,res)=>{

console.log("meta"+req.id)




try {
    
    const detailsM= new egyptianDetailsModel(req.body)
    
    const result = await detailsM.save()
    

    const addDetailsToUser= await userModel.findByIdAndUpdate(req.id,{userDetails:result._id},{new:true})
    

res.status(200).json(result)




            
        } catch (error) {
res.status(401).json({
    message:error.message
})
            
        }







    }


}

module.exports=EgyptianDetails