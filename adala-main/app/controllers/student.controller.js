const studentModel=require('../../db/models/student.model')
const Helper = require('../helper')
const { uploadfile } = require('../middlewares')
const multer=require('multer')
const fs=require('fs')
const path=require('path')
class Student{
    static add=(req,res)=>{
        const upload = uploadfile('lawyerData/' + req.user._id)
        const uploadImage = upload.single('collegeCard')
        uploadImage(req, res, async function (e) {
            if (e instanceof multer.MulterError)
                Helper.formatMyAPIRes(res, 500, false, e, e.message + 'its a multer error')
            else if (e) {
                Helper.formatMyAPIRes(res, 500, false, e, e.message)
            }
            else {
                const deleteIfFail=req.file.path
                try {
                    let collegeCard = req.file.path.replace('statics\\', '')
                    collegeCard = collegeCard.replace(/\\/g, '/')
                    const student = studentModel(req.body)
                    student.collegeCard = collegeCard
                    const studentData = await student.save()
                    req.user.userData = student._id
                    const userData = await req.user.save()
                    Helper.formatMyAPIRes(res, 200, true, { userData, studentData }, 'student data inserted successfully')
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
module.exports=Student