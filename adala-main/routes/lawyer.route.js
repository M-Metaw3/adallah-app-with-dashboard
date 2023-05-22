const Lawyer=require('../app/controllers/lawyer.controller')
const { auth } = require('../app/middlewares')

const router=require('express').Router()

router.post('/',auth,Lawyer.add)
router.post('/complete',auth,Lawyer.completeLawyer)
router.get('/',Lawyer.getalllaweyers)
router.get('/search/:searchkey',Lawyer.searchlawyer)
router.get('/category/:searchkey',Lawyer.searchlawyerBycategory)

router.get('/:id',Lawyer.getSpecificalllaweyers)

// const getallworkhours= await Clocks.find({emailCusromerSerive:{$regex:'^'+x}})


module.exports=router