const fileModel = require('../../db/models/file.model')
const Helper = require('../helper')
const fs = require('fs')
const path=require('path')
const { uploadfile } = require('../middlewares')
const multer = require('multer')
class File {
    static add = (req, res) => {
        const newFile=fileModel({})
        if (!fs.existsSync(path.join(__dirname, '../../statics/files/' + newFile._id))) {
            fs.mkdirSync(path.join(__dirname, '../../statics/files/' + newFile._id), { recursive: true })
        }
        const upload = uploadfile('files/'+newFile._id)
        const uploadImage = upload.fields([{ name: 'file', maxCount: 1 }, { name: 'icon', maxCount: 1 }])
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
                    console.log(newFile._id)
                    let file = req.files['file'][0].path.replace('statics\\', '')
                    file = file.replace('\\', '/')
                    newFile.file = file
                    let icon = req.files['icon'][0].path.replace('statics\\', '')
                    icon = icon.replace('\\', '/')
                    newFile.icon = icon
                    a7a
                    newFile.arName=req.body.arName
                    newFile.engName=req.body.engName
                    let result=await newFile.save()
        console.log(req.body)
        console.log(newFile)
                    Helper.formatMyAPIRes(res,201,true,result,'the file saved on server successfully')
                }
                catch (error) {
                    console.log(path.join(__dirname, '../../statics/files/'+ newFile._id))
                    if (fs.existsSync(path.join(__dirname, '../../statics/files/'+ newFile._id))) {
                        var list = fs.readdirSync(path.join(__dirname, '../../statics/files/'+ newFile._id));
    for(var i = 0; i < list.length; i++) {
        var filename = path.join(__dirname, '../../statics/files/'+ newFile._id/"/"+list[i]);
        var stat = fs.statSync(filename);

        if(filename == "." || filename == "..") {
            // pass these files
        } else if(stat.isDirectory()) {
            // rmdir recursively
            rmdir(filename);
        } else {
            // rm fiilename
            fs.unlinkSync(filename);
        }
    }
                        console.log("b")
                        fs.rmSync(path.join(__dirname, '../../statics/files/'+ newFile._id))
                    }
                    let result=await fileModel.findByIdAndDelete(newFile._id)
                    Helper.formatMyAPIRes(res, 500, false,{error,result}, error.message)
                }
            }
        })
    }
}
module.exports = File