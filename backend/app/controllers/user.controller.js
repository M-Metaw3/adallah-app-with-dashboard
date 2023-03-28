const fs = require('fs')
const path = require('path')
const bycrpt = require('bcrypt')
const multer = require('multer')
const userModel = require('../../db/models/user.model')
const DeletedUsersModel = require('../../db/models/deletedUser.model')
const egyptianDetailsModel = require('../../db/models/egyptianDetails.model')
const notEgyptianDetailsModel = require('../../db/models/notEgyptianModel')
const Helper = require('../helper')
const { uploadfile } = require('../middlewares')
const creatToken = require('../../db/models/tokens.model').creatToken;
// const tokenModel = require('../../db/models/tokens.model');
class User {
    static register = async (req, res) => {
        // const { confirmPassword, userType, name, arName, password, nationality, phone, image } = req.body
        if (req.body.password != req.body.confirmPassword) return res.status(400).json({
            message: "password doesnt match"
        })
        // const hashPassword = await bycrpt.hash(password,12)
        try {
            // const user = new userModel({
            //     phone: phone,
            //     userType: userType,
            //     name: name,
            //     arName,
            //     // password:hashPassword,
            //     password: password,
            //     nationality: nationality,
            //     image: image,
            // })
            const user = new userModel(req.body)
            const result = await user.save()
            console.log()
            if (!fs.existsSync(path.join(__dirname, '../../statics/lawyerData/' + result._id))) {
                fs.mkdirSync(path.join(__dirname, '../../statics/lawyerData/' + result._id), { recursive: true })
            }
            //   const  token =await jwt.sign({id:result._id,userType:result.userType},"test",{expiresIn:"5h"})
            const token = await creatToken({ id: result._id, userType: result.userType })
            res.header("Authorization", token)
            Helper.formatMyAPIRes(res,200,true,result,'you are user now complete your data')
            // res.status(201).json({
            //     message: "done"
            //     ,
            //     body: { id: result._id, phone: result.phone, name: result.name, arName: result.arName, image: result.image, userType: result.userType }
            // })
        }

        catch (error) {
            console.log(error)
            res.status(400).json({
                message: error.message
            })


        }

    }
    static addDetails = (req, res) => {
        if (req.user.userDetails) {
            Helper.formatMyAPIRes(res, 200, false, {}, 'you added your details before')
        } else {
            const upload = uploadfile('lawyerData/' + req.user._id)
            if (req.user.nationality == 'egyptian') {
                const uploadImage = upload.fields([{ name: 'frontNationalIdImage', maxCount: 1 }, { name: 'backNationalIdImage', maxCount: 1 }])
                uploadImage(req, res, async function (e) {
                    if (e instanceof multer.MulterError)
                        Helper.formatMyAPIRes(res, 500, false, e, e.message + 'its a multer error')
                    else if (e) {
                        Helper.formatMyAPIRes(res, 500, false, e, e.message)
                    }
                    else {
                        const deleteIfFail=[]
                        for(let file in req.files){
                            // file=req.files[file][0].path.replace('\\', '/')
                            deleteIfFail.push(req.files[file][0].path)
                        }
                        try {
                            let frontNationalIdImage = req.files['frontNationalIdImage'][0].path.replace('statics\\', '')
                            frontNationalIdImage = frontNationalIdImage.replace('\\', '/')
                            let backNationalIdImage = req.files['backNationalIdImage'][0].path.replace('statics\\', '')
                            backNationalIdImage = backNationalIdImage.replace('\\', '/')
                            const details = egyptianDetailsModel(req.body)
                            details.backNationalIdImage = backNationalIdImage
                            details.frontNationalIdImage = frontNationalIdImage
                            const Details = await details.save()
                            req.user.userDetails = details._id
                            const userData = await req.user.save()
                            // const userData=await userModel.findByIdAndUpdate(req.user._id,{$set:{userData:lawyerData._id}})
                            Helper.formatMyAPIRes(res, 200, true, { Details, userData }, 'user details inserted successfully')
                        }
                        catch (e) {
                           for(let i=0;i<deleteIfFail.length;i++) {
                                if(fs.existsSync(path.join(__dirname, '../../' + deleteIfFail[i]))){
                                fs.unlinkSync(path.join(__dirname, '../../' + deleteIfFail[i]))
                            }
                        }
                            Helper.formatMyAPIRes(res, 500, false, e, e.message)
                        }
                    }
                })
            } else {
                const uploadImage = upload.single('passportImage')
                uploadImage(req, res, async function (e) {
                    if (e instanceof multer.MulterError)
                        Helper.formatMyAPIRes(res, 500, false, e, e.message + 'its a multer error')
                    else if (e) {
                        Helper.formatMyAPIRes(res, 500, false, e, e.message)
                    }
                    else {
                        const deleteIfFail=req.file.path
                        try {
                            let passportImage = req.file.path.replace('statics\\', '')
                            passportImage = passportImage.replace(/\\/g, '/')
                            const details = notEgyptianDetailsModel(req.body)
                            details.passportImage = passportImage
                            const Details = await details.save()
                            req.user.userDetails = details._id
                            const userData = await req.user.save()
                            Helper.formatMyAPIRes(res, 200, true, { userData, Details }, 'user details inserted successfully')
                        }
                        catch (e) {
                            if(fs.existsSync(path.join(__dirname, '../../' + deleteIfFail))){
                                fs.unlinkSync(path.join(__dirname, '../../' + deleteIfFail))
                            }
                            Helper.formatMyAPIRes(res, 500, false, e, e.message)
                        }
                    }
                })
            }
        }
    }
    static checkUserInfo=(req,res)=>{
        Helper.handlingMyFunction(req,res,(req)=>{},'this user is active now')
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // static signin = async (req, res) => {
    //     const { phone, password } = req.body
    //     const isexsitedphone = await userModel.findOne({ phone })
    //     console.log(isexsitedphone)
    //     if (!isexsitedphone) return res.status(400).json({ message: "phone not exsited" })}

    static signin = async (req, res) => {
        const { phone, password } = req.body
        const isexsitedphone = await userModel.findOne({ phone })
        if (!isexsitedphone) return res.status(400).json({ message: "phone not exsited" })


        try {
            // const m =await userModel.findById("63f4d6d1204f987ac575d010").populate("userDetails")
            // console.log(m)
            const passwordCorrect = bycrpt.compareSync(password, isexsitedphone.password)

            if (!passwordCorrect) return res.status(400).json({ message: "password doesnt correct" })

            //   const  token =await jwt.sign({id:result._id,userType:result.userType},"test",{expiresIn:"5h"})
            const token = await creatToken({ id: isexsitedphone._id, userType: isexsitedphone.userType })
            res.header("authorization", token)
            res.status(201).json({
                message: "loged in"
                ,
                body:  isexsitedphone 
            })



        } catch (error) {
            res.status(400).json({ message: error.message })
            console.log(error)

        }

    }
    ///////////////////////////////////////////////////////////////////////////////////////////////

    static deleteUser = async (req, res) => {


        const _id = req.params.id
        // console.log(deletedUserId)
        try {
            const FindUser = await userModel.findById(_id)
            console.log(FindUser)
            const addUserDeleted = await new DeletedUsersModel(FindUser)
            await addUserDeleted.save()
            const deletetedsuccesful = await userModel.findByIdAndDelete(_id)
            res.status(201).json({ message: "user has deleted", data: deletetedsuccesful })


        } catch (error) {
            res.status(400).json({ message: error.message })

        }

    }
    ///////////////////////////////////////////////////////////////////////////////////////////
    static Changepassword = async (req, res) => {
        const idUser = req.params.id
        const passwords = req.body

        console.log(passwords)
        try {

            const userWantChangePassword = await userModel.findById(idUser)
            console.log(userWantChangePassword)

            const ifPasswordTrue = await bycrpt.compare(passwords.oldPassword, userWantChangePassword.password)

            if (!ifPasswordTrue) return res.status(403).json({ message: "user old Password not Correct " })
            if (passwords.newPassword != passwords.confirmnewPassword) return res.status(403).json({ message: "new Password not match confirm new password " })

            const hashNewPassword = await bycrpt.hash(passwords.newPassword, 15)
            const changePasswordCorrect = await userModel.findByIdAndUpdate(idUser, { password: hashNewPassword }, { new: true })

            res.status(201).json({ message: "user Password Changed ", data: changePasswordCorrect })


        } catch (error) {

            res.status(400).json({ message: error.message })
        }

    }
    static updateFile = (req, res) => {
        const upload = uploadfile('lawyerData/' + req.user._id)
        const uploadImage = upload.single('profileImage')
        uploadImage(req, res, async function (e) {
            if (e instanceof multer.MulterError)
                Helper.formatMyAPIRes(res, 500, false, e, e.message + 'its a multer error')
            else if (e) {
                Helper.formatMyAPIRes(res, 500, false, e, e.message)
            }
            else {
                try {
                    let image = req.file.path.replace('statics\\', '')
                    image = image.replace(/\\/g, '/')
                    // req.user.image = image
                    const result =  await userModel.findByIdAndUpdate(req.user._id, { $set: { image } }, { returnDocument: 'after' })
                    //await req.user.save()
                    if (req.user.image != 'defaultuserimage.png') {
                        fs.unlinkSync(path.join(__dirname, '../../statics/' + req.user.image))
                    }
                    Helper.formatMyAPIRes(res, 200, true, { file: req.file, result }, 'your update your image added successfully')
                }
                catch (e) {
                    console.log(e)
                    Helper.formatMyAPIRes(res, 500, false, e, e.message)
                }
            }
        })
    }






}


module.exports = User
