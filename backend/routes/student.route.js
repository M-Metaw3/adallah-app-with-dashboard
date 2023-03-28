const Student=require('../app/controllers/student.controller')
const { auth } = require('../app/middlewares')
const router=require('express').Router()
router.post('/',auth,Student.add)
module.exports=router