const adminModel= require('../../db/models/admin.Model')
const Clocks= require('../../db/models/clocksModel')

const bycrpt = require('bcrypt')
var jwt = require('jsonwebtoken');
class admin {

static adminLogIn =async(req,res)=>{
console.log("metawea")
const {name,email,password,con_password,image,position}=req.body
    if(password!=con_password) return res.status(400).json({message:"confirm password isn't match "})

    try {
// console.log(req.body)
      const  hashingPassword =await bycrpt.hash(password,12)
        const admin = await new adminModel({name:name,email:email,password:hashingPassword,image:image,position:position})
        await admin.save()
        // const token = jwt.sign({email:admin.email,name:admin.name,id:admin._id,position:admin.position},"Authorization",{expiresIn:"5h"})

        // res.header("Authorization", token)
res.status(201).json({message:"created succefully" ,body:{name:admin.name,email:admin.email,
    image:admin.image,
   position: admin.position,
//    token:token
}})

        
    } catch (error) {
res.status(400).json(error.message)
        
    }



}

//////////////////////////////////////////////////////////////////////////////////////////////////


static Logginemployee = async (req,res) => {
    console.log("metawea")
const {email,password} = req.body
try {

const admin = await adminModel.findOne({email})
if (!admin) return res.status(400).json({message:'email doesnt exsited'})
const passwordCorrect = bycrpt.compareSync(password, admin.password)
if(!passwordCorrect) return res.status(400).json({message:'password not correct'})
console.log(passwordCorrect)


const token = jwt.sign({email:admin.email,name:admin.name,id:admin._id,position:admin.position},"Authorization",{expiresIn:"5h"})

res.header("Authorization", token)
res.status(201).json({message:"created succefully" ,body:{name:admin.name,email:admin.email,
image:admin.image,
position: admin.position,
token:token
}})
    
} catch (error) {
    
    res.json({message:error.message})
}

    

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

static getAllemployee = async (req,res) => {

    try {
console.log("doneeeeeeeeeeeeee")
        const getemp = await adminModel.find({position:["Admin","markting","customerService"],susbended:false},{name:1,image:1,position:1,email:1})
       res.status(200).json(getemp)
        
    } catch (error) {
       res.status(400).json({message:error.message})
        
    }
  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
static updateEmployeeInformaion = async (req,res) => {

    const {id} = req.params
   
    try {
      

     const updateEmpInfo = await adminModel.findByIdAndUpdate(id,req.body,{new:true})

console.log("metawea")
       res.status(200).json( {message:"update Employee Informaion Succesfully", body:updateEmpInfo})
        
    } catch (error) {
       res.status(400).json( {message:"update Employee has error", error:error.message})
        
    }
  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

static deleteEmployeeFromAPP = async (req,res) => {
const {id} = req.params
    try {
       const deletedEmploye = await adminModel.findByIdAndDelete({_id:id})
    //    if (!deletedEmploye)return    res.status(400).json({error:"error id not exsited"})
      
        res.status(200).json({message:"deleted Succefully", body:deletedEmploye})
        
    } catch (error) {
        res.status(400).json({message:"deleted error", error:error.message})
       
    }
  
}
//////////////////////////////////////////////////////////////////

static susbendedEmp =async (req,res) => {
    const checked = req.body.checked
    const{id}=req.params
    console.log(checked,id)
try {
    console.log("done")
if (checked=="block"){
const empblocked= await adminModel.findByIdAndUpdate(id,{susbended:true},{new:true}).select({susbended:1,name:1})
res.status(200).json({message:"this employee has blocked", body:empblocked})

 }
 if(checked=="unblocking"){
    const empUnblocked= await adminModel.findByIdAndUpdate(id,{susbended:false},{new:true}).select({susbended:1,name:1})
res.status(200).json({message:"this employee has unblocked ", body:empUnblocked})


 }
} catch (error) {
res.status(200).json({message:"an error occured", error:error.message})
  
}
  
}

/////////////////////////////////////////////////////////////////////////////////////////
static changeEmpPassword = async (req,res) => {
  
const {id} = req.params
const {password} = req.body

try {

    const hashPassword = await bycrpt.hash(password,15)

const changeEmpPassword = await adminModel.findByIdAndUpdate(id,{password:hashPassword},{new:true}).select({email:1,name:1})

res.status(200).json({message:"password changed succefully",body: changeEmpPassword})
    
} catch (error) {
    console.log(error)
}

}


static enterHours = async(req,res) => {


    try {
console.log(req.body)
const clocks = await new Clocks(req.body)
const ClocksSave = await clocks.save()

res.send(clocks)
        
    } catch (error){

res.send(error.message )
        
    }
  
}

static getworkhours =async (req,res) => {

    try {
        // if(!req.body) return await res.send("please fill th fields")
const getallworkhours= await Clocks.find()
// const getallworkhours= await Clocks.find({emailCusromerSerive:{$regex:'^'+x}})

res.status(201).json({message:"get all employee works hours ", body:getallworkhours})
        
    } catch (error) {
res.status(400).json({message:"an error occured ", error:error})
   
    }
  
}

}

module.exports=admin