import * as api from "../api/api"
import React from 'react';



const loginAction = (body)=>async(dispatch)=>{

console.log(body)
await api.Loggin(body).then((element)=>element.json().then((data)=>{
  dispatch({type:'loggin',payload:data})
}))

}





const logOut = (body)=>async(dispatch)=>{

 
    dispatch({type:'logout',payload:""})
  

  
  
  
  
  }



const registeremp =  (body)=> async(dispatch) => {
  
  try {
    
    
    await api.regapi(body).then((el)=>{el.json().then((ell)=>{
      
      
      
      dispatch({type:'registration',payload:ell})})}) 
      
      
      
      
    } catch (error) {
      alert(error)
      console.log("inodgnigsdop")
      
      
      
    }
    
  }
  

  const getAllemp =()=>async(dispatch) => {

try {
  console.log("meta")
 await api.getemp().then((el)=>el.json().then((el)=>dispatch({type:"allEmp",payload:el})))
  
} catch (error) {
  
}

    
  }
  
export default {registeremp,loginAction,logOut,getAllemp}