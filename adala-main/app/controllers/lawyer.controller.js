const lawyerModel = require('../../db/models/lawyer.model')
const userModel = require('../../db/models/user.model')
const Helper = require('../helper')
const { uploadfile } = require('../middlewares')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
class Lawyer {
    static add = (req, res) => {
       try{
         if (req.user.userData) {
            Helper.formatMyAPIRes(res, 200, false, {}, 'you added your data before')
        } else if (req.user.userType == 'citizens') {
            Helper.formatMyAPIRes(res, 200, false, {}, 'you are just citizen this data is not required from you')
        } else {
            const upload = uploadfile('lawyerData/' + req.user._id)
            const uploadImage = upload.fields([{ name: 'syndicateCardImage', maxCount: 1 }, { name: 'taxesRecordImage', maxCount: 1 }])
            uploadImage(req, res, async function (e) {
                if (e instanceof multer.MulterError)
                    Helper.formatMyAPIRes(res, 500, false, e, e.message + 'its a multer error')
                else if (e) {
                    Helper.formatMyAPIRes(res, 500, false, e, e.message)
                }
                else {
                    const deleteIfFail = []
                    for (let file in req.files) {
                        // file=req.files[file][0].path.replace('\\', '/')
                        deleteIfFail.push(req.files[file][0].path)
                    }
                    try {
                        let syndicateCardImage = req.files['syndicateCardImage'][0].path.replace('statics\\', '')
                        syndicateCardImage = syndicateCardImage.replace('\\', '/')
                        let taxesRecordImage = req.files['taxesRecordImage'][0].path.replace('statics\\', '')
                        taxesRecordImage = taxesRecordImage.replace('\\', '/')  
                        const reversectegory=req.category.map(cat=>cat.reverse())
                        req.body.syndiacateRecordedWorkArea = JSON.parse(req.body.syndiacateRecordedWorkArea)
                        const lawyer = lawyerModel(req.body)
                        lawyer.taxesRecordImage = taxesRecordImage
                        lawyer.syndicateCardImage = syndicateCardImage
                        const lawyerData = await lawyer.save()
                        req.user.userData = lawyerData._id
                        const userData = await req.user.save()
                        Helper.formatMyAPIRes(res, 200, true, { lawyerData, userData }, 'lawyer data inserted successfully')
                    }
                    catch (e) {
                        console.log(e);
                        for (let i = 0; i < deleteIfFail.length; i++) {
                            if (fs.existsSync(path.join(__dirname, '../../' + deleteIfFail[i]))) {
                                fs.unlinkSync(path.join(__dirname, '../../' + deleteIfFail[i]))
                            }
                        }
                        Helper.formatMyAPIRes(res, 500, false, e, e.message)
                    }
                }
            })
        }
    }catch(e){
        console.log(e)
        Helper.formatMyAPIRes(res, 500, false, e, e.message)
    }
    }
    static completeLawyer= (req,res)=>{
        Helper.handlingMyFunction(req,res,async(req)=>{
            const lawyer=await lawyerModel.findById(req.user.userData)
            lawyer.officesData = JSON.parse(req.body.officesData)
            // lawyer.price =req.body.price
            lawyer.description =req.body.description
            lawyer.replyForLegalAdviceWithSpacificTime =req.body.replyForLegalAdviceWithSpacificTime
            if(true){
                return lawyer.save()
            }
        },'you have completed the data successfully')
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    static getalllaweyers = async (req, res) => {

console.log("getalllaweyers")
    try {
        const allUser = await userModel.find().populate('userType').populate("nationality")
console.log(allUser)
        const lawyerFromUser= allUser.filter((el)=>el.userType=="lawyers")
        console.log(lawyerFromUser)
        res.status(200).json({
            message:" all lawyers ",
            data:lawyerFromUser
        })


        } catch (error) {
           
            res.status(400).json(error)
        }


    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    static getSpecificalllaweyers = async (req, res) => {
        const lawyerId = req.params.id
        try {

            const onlyLawyer = await userModel.findById(lawyerId).populate('userDetails').populate('userData')

            res.status(201).json({ message: "lawyer get details successfully", data: onlyLawyer })

        } catch (error) {

            res.status(400).json({ message: "lawyer get details has error", error: error.message })
        }

    }
    static recordDaysoff=async(req,res)=>{
        const lawyer=await lawyerModel.findById(req.user.userData)
        lawyer.offDays=lawyer.offDays.concate(req.body.offDays) 
        lawyer.offDays=lawyer.offDays.filter(date=>{return (new Date(((new Date()).toLocaleDateString()).toString())-date)>=0})
        if(true){
            lawyer.save()
        }
     }


static searchlawyer =async (req,res) => {
  
    console.log(req.params)
const {id}=req.params
const {searchkey}=req.params

try {
    const Lawyersearch = await userModel.find({name:{$regex:'^'+searchkey}})
    console.log(Lawyersearch)
    res.send({ message: "lawyer get details successfully", data: Lawyersearch })
// switch (id) {
//     case "1":

        
//         break;

//     default:
//         // res.status(201).json({ message: "lawyer get details successfully", data: Lawyersearch })
//         break;
// }



} catch (error) {
    res.json({ message: "lawyer get details has error", error: error.message })
    
}


}


static searchlawyerBycategory =async (req,res) => {
  
    console.log(req.params)
const {id}=req.params
const {searchkey}=req.params

try {
    const Lawyersearch = await lawyerModel.find({category:searchkey})
    console.log(Lawyersearch)
    res.send({ message: "lawyer get details successfully", data: Lawyersearch })




} catch (error) {
    res.json({ message: "lawyer get details has error", error: error.message })
    
}


}

}
module.exports = Lawyer