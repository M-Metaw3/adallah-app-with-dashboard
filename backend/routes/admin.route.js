const router=require('express').Router()
const admin = require('../app/controllers/admin.Controller')
const lawyerAnalysis = require('../app/controllers/adminAnalysis.Controller')


router.post('/',admin.adminLogIn)
router.post('/addworkhours',admin.enterHours)
router.get('/addworkhours',admin.getworkhours)
// router.get('/',(req,res) => {
//   console.log(req.body)
// })

router.post('/loggin',admin.Logginemployee)
router.get('/',admin.getAllemployee)
router.patch('/update/:id',admin.updateEmployeeInformaion)
router.delete('/delete/:id',admin.deleteEmployeeFromAPP)
router.patch('/suspened/:id',admin.susbendedEmp)
router.patch('/updatePassword/:id',admin.changeEmpPassword)
router.get('/getlawyerdetails/:info',lawyerAnalysis.getAlllawersDetails)
router.get('/getlawyerdeletedInfo',lawyerAnalysis.deletedLawerInfo)
router.patch('/BlockedLawyer/:info/:id',lawyerAnalysis.susbendedLawyer)
router.patch('/acceptedLawyer/:info/:id',lawyerAnalysis.AcceptedLawyerinfo)












module.exports=router
