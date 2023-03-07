import React, { PropTypes, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch ,useSelector } from 'react-redux';
import posts from "./action/postaction"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect  } from "react";
// import axios from "react";
import ReactDOM from "react-dom/client";
import Registration from './component/Registration'
import Navbar from "./component/Navbar";
import Home from './component/Home'
import Logout from './component/Logout'
import Login from './component/Login'
import Error from "./component/Erorr";
import EmployeDetails from "./component/EmployeDetails";
import postaction from './action/postaction';
import LawerDetail from "./component/LawerDetail";

import Addlocations from "./component/Addlocations";




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








const users = JSON.parse(localStorage.getItem("token"))

const selector = useSelector((state)=>state)

  return (

    <div >
    <BrowserRouter>
 
 {users?   <Navbar/> : ''    }
      <Routes>
       {users? <Route path="/Home" element={<Home />} >

       <Route path="/Home" element={<Registration />} />
       <Route path="/Home/registration" element={<Registration />} />
       <Route path="/Home/lowyerDetails" element={<LawerDetail />} />
       <Route path="/Home/erorr" element={<Error />} />
       <Route path="/Home/EmployeDetails" element={< EmployeDetails/>} />
       <Route path="/Home/addlocation" element={< Addlocations/>} />

       </Route> :<Route path="/Home" element={<Login />} />}

    

 {!users?  <Route path="/" element={<Login />} /> :<Route path="/" element={<Home/>} />  }

      
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
