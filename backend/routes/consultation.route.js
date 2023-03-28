// const Lawyer=require('../app/controllers/lawyer.controller')
const { auth } = require('../app/middlewares')

const consultation = require('../app/controllers/consultation.Controller')

const router=require('express').Router()

// router.post('/',consultation.postConsulating)
router.post('/:lawyerId',auth,consultation.postConsultation)
router.get('/recieved',consultation.getReceviedConsultation)
router.get('/record',consultation.getMyRecord)
router.get('/record/:status',consultation.getOnlyStatus)
router.put('/respond/:id/:status',consultation.respondConsultation)
router.put('/review/:id',consultation.makeReview)



module.exports=router
