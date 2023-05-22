const citizenModel = require("../../db/models/citizen.model")
const Helper = require("../helper")
class Citizen{
    static add=(req,res)=>{
       Helper.handlingMyFunction(req,res,async(req)=>{
         if (req.user.userData) {
          const e=new Error('you added your data before')
          e.name='Error'
          throw e
        } else if (req.user.userType == 'lawyers') {
            const e=new Error('you do not need to enter this data')
            e.name='Error'
            throw e
        } else {
            const newCitizen=citizenModel(req.body)
            const result=await newCitizen.save()
            req.user.userData=result._id
            await req.user.save()
            if(true){
                return req.user
            }
        }},'you completed your data successfully')
    }
}
module.exports=Citizen