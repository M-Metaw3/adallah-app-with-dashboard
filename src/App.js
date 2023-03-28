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
import Clocks from './component/Clocks'
import Addlocations from "./component/Addlocations";
import AllLawyerDetails from './component/lawyercomponent/AllLawyerDetails'
import LawyerPending from './component/lawyercomponent/LawyerPending'
import Lawyerdeleting from './component/lawyercomponent/Lawyerdeleting'
import AddAdvertising from './component/AddAdvertising'
import Library from "./component/Library";







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
    <BrowserRouter >
 
      {users?   <Navbar/> : ''    }
      <Routes>
       {users? <Route path="/Home" element={<Home />} >

       <Route path="/Home" element={<Registration />} />
       <Route path="/Home/Library" element={<Library />} />

       <Route path="/Home/registration" element={<Registration />} />
       <Route path="/Home/AddAdvertising" element={<AddAdvertising />} />

       <Route path="/Home/lowyerDetails" element={<LawerDetail />} >
       <Route path="/Home/lowyerDetails/AllLawyerDetails" element={<AllLawyerDetails />} />
       <Route path="/Home/lowyerDetails/lawyerpending" element={<LawyerPending />} />
       <Route path="/Home/lowyerDetails/Lawyerdeleting" element={<Lawyerdeleting />} />






       </Route>
       <Route path="/Home/erorr" element={<Error />} />
       <Route path="/Home/EmployeDetails" element={< EmployeDetails/>} />
       <Route path="/Home/addlocation" element={< Addlocations/>} />
       <Route path="/Home/clocks" element={< Clocks/>} />


       </Route> :<Route path="/Home" element={<Login />} />}

    

 {!users?  <Route path="/" element={<Login />} /> :<Route path="/" element={<Home/>} />  }

      
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
