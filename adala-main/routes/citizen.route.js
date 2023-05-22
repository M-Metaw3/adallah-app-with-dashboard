const Citizen=require('../app/controllers/citizens.Controller')
const { auth } = require('../app/middlewares')
const router=require('express').Router()
router.post('/',auth,Citizen.add)

module.exports=router