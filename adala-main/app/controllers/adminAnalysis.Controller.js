const lawyer = require("../../db/models/user.model")
const deletedLawer = require("../../db/models/deletedUser.model")


class adminAnalysis{

static getAlllawersDetails =async(req,res) => {

    const {info} = req.params

try {
    console.log("getAlllawersDetails")
switch (info) {
    case "1":
        const getAllLawyer = await lawyer.find({userType:"lawyers"}).populate('userData')
        const getAllLawyerCount = await getAllLawyer.length
        console.log(getAllLawyerCount)
        res.status(201).json({message:"lawyer get details successfully", countofLawyer:getAllLawyerCount, data:getAllLawyer})

        break;

        case "2":
        
        const getAllLawyerNotVerified = await lawyer.find({userType:"lawyers",checked:false}).populate('userData')
        const getAllLawyerNotVerifiedCount = await getAllLawyerNotVerified.length

        res.status(201).json({message:"lawyers not verified ",count:getAllLawyerNotVerifiedCount ,data:getAllLawyerNotVerified})

        break;



        case "3":
        
        const getAllLawyerVerified = await lawyer.find({userType:"lawyers",checked:true}).populate('userData')
        const getAllLawyerVerifiedCount = await getAllLawyerVerified.length

        res.status(201).json({message:"lawyers  verified ",count:getAllLawyerVerifiedCount ,data:getAllLawyerVerified})

    
        break;

        case "4":
        
        const getAllLawyerSusbended = await lawyer.find({userType:"lawyers",susbended:true}).populate('userData')
        const getAllLawyerSusbendedCount = await getAllLawyerSusbended.length

        res.status(201).json({message:"lawyers  verified ",count:getAllLawyerSusbendedCount ,data:getAllLawyerSusbended})

    
        break;

    default:
        res.status(400).json({message:"invalide request"})

        break;
}


    
} catch (error) {
    res.status(400).json({message:"lawyer get details has error",error:error.message})
    
}



}
static susbendedLawyer = async (req,res) => {
  const  {id} = req.params
  const  {info} =req.params

    try {

switch (info) {
    case "s":
       
const bolcked = await lawyer.findOneAndUpdate(id,{susbended:true},{new:true})

res.status(201).json({message:"lawyers  susbended ",data:bolcked})

        break;

case "unsus":
    

const unbolcked = await lawyer.findByIdAndUpdate(id,{susbended:false},{new:true})
res.status(201).json({message:"lawyers  unsusbended ",data:unbolcked})


break;

    default:
    res.status(400).json({message:"an error"})

        break;
}


        
    } catch (error) {


        res.status(400).json({message:"an error",error:error.message})
        
    }
  
}



static AcceptedLawyerinfo = async (req,res) => {


    const  {id} = req.params
    const  {info} =req.params

    try {


        switch (info) {
            case "accepted":
               
        const acceptedinfo = await lawyer.findByIdAndUpdate(id,{checked:true},{new:true})
        
        res.status(201).json({message:"lawyers  info accepted ",data:acceptedinfo})
        
                break;
        
        case "rejected":
            
        
        const rejectedinfo = await lawyer.findByIdAndUpdate(id,{checked:false},{new:true})
        res.status(201).json({message:"lawyers  unsusbended ",data:rejectedinfo})
        
        break;
        
        
            default:
            res.status(400).json({message:"an error"})
        
                break;
        }
        
    } catch (error) {

        res.status(400).json({message:"an error",error:error.message})

    }
  
}




static deletedLawerInfo = async (req,res) => {


    try {

        const deleteLawyerInfo =await deletedLawer.find()
        const deleteLawyerInfocount = await deletedLawer.find().count()
        res.status(201).json({message:"lawyers  was deleting  ",count:deleteLawyerInfocount,data:deleteLawyerInfo})

        
    } catch (error) {
        res.status(400).json({message:"an error",error:error.message,})
        
    }
  
}




static recoverAccount = async (req,res) => {

    const {id} = req.params

    try {

        const deleteLawyerInfo =await deletedLawer.findById(id)
        const deleteLawyerInfocount = await new lawyer(deleteLawyerInfo)
        await deleteLawyerInfocount.save()
        const deleteLawyerInfofromdeletedcollection =await deletedLawer.findByIdAndDelete(id)


        res.status(201).json({message:"lawyers  was recovering   ",data:deleteLawyerInfo})

        
    } catch (error) {
        res.status(400).json({message:"an error",error:error.message,})
        
    }
  
}



}
module.exports=adminAnalysis