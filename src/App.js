import React, { PropTypes, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch ,useSelector } from 'react-redux';
import posts from "./action/postaction"
import { useEffect  } from "react";
// import axios from "react";
import postaction from './action/postaction';
import Routing from "./Routing/Routing";

const App = () => {

  const dispatch =useDispatch()
  
  useEffect(() => {
    console.log("getEmpDetails");
    dispatch( postaction.getAllemp())
}, [dispatch]);


// useEffect(async()=>{
//  const a= await fetch(`${urlregis}/signup`,{
//     method:"post",
//     headers:{
//           "Content-Type": " application/json",
//     "Authorization": `Bearer ${token}`,
//     },
//     body:JSON.stringify({
//       name: 'ahmed',
//       email: 'asaasdsaad66@gmail.com',
//       password: '123456789',
//       con_password: '123456789',
//       image: '"hoigfdoisgdjpogdpo"'
//     })
    
//   }).then((el)=>{el.json().then((el)=>console.log(el))}).catch((error)=>console.log(error))
 
// },[])

return (
  
  <>
  <Routing/>
  </>
  );
};

export default App;
