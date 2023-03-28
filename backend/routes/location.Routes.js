const router=require('express').Router()
const locationControll = require('../app/controllers/locations.Controller')
router.post('/',locationControll.addLocation)
router.get('/',locationControll.getspacificLoctions)
router.get('/:id/:serchkey',locationControll.getlocationByName)





module.exports=router
