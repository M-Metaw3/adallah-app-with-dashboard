require('../db/connection')
const path=require('path')
const cors=require('cors')
const express=require('express')
const app=express()
app.use(cors())
app.use(express.static(path.join(__dirname,'../statics')))
app.use(express.json({limit:'200mb'}))
app.use(express.urlencoded({extended:true,limit:'200mb'}))
const userRoutes=require('../routes/user.route')
const lawyerRoutes=require('../routes/lawyer.route')
const locationRoutes=require('../routes/location.Routes')
const consultationRoutes=require('../routes/consultation.route')
const admin=require('../routes/admin.route')
const studentRoutes=require('../routes/student.route')

app.use('/adala/student',studentRoutes)
app.use('/adala/lawyer',lawyerRoutes)
app.use('/adala/user',userRoutes)
app.use('/adala/locations',locationRoutes)
app.use('/adala/consultation',consultationRoutes)
app.use('/admin',admin)
const aa = new Date()
app.use(express.static('front/build'))
// app.get('/', async(req,res) => {
//   await res.sendFile(path.resolve('front/build/index.html'))
//   console.log( "aa.getHours()")
//   console.log( "aa.setHours(100)")

  
// })

module.exports=app