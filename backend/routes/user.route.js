const User=require('../app/controllers/user.controller')
const details=require('../app/controllers/egyptianDetailsController')
const { auth } = require('../app/middlewares')
const router=require('express').Router()
router.post('/register',User.register)
router.post('/loggin',User.signin)
// router.post('/details',details.addDetails)
router.post('/egydetails',auth,User.addDetails)
router.post('/notegydetails',auth,User.addDetails)
router.patch('/changepassword/:id',User.Changepassword)
router.put('/updateImage',auth,User.updateFile)
router.delete('/:id',User.deleteUser)




module.exports=router