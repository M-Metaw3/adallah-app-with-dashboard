import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from '../component/Register/Registration'
import Home from '../component/Home/Home'
import Login from '../component/Login/Login'
import Error from "../component/Erorr";
import EmployeDetails from "../component/EmployeDetails/EmployeDetails";
import LawerDetail from "../component/LawerDetail";
import Clocks from '../component/Clocks'
import Addlocations from "../component/Addlocations";
import AllLawyerDetails from '../component/lawyercomponent/AllLawyerDetails'
import LawyerPending from '../component/lawyercomponent/LawyerPending'
import Lawyerdeleting from '../component/lawyercomponent/Lawyerdeleting'
import AddAdvertising from '../component/AddAdvertising'
import Library from "../component/Library";
import CitizenDetails from "../component/CitizenDetails/CitizenDetails";
import Analysis from "../component/Analysis/Analysis";
import AllEmployees from "../component/EmployeDetails/AllEmployees";
function Routing() {
    const users = JSON.parse(localStorage.getItem("token"))

    return (
    <>
     <BrowserRouter >
    {/* {users?   <Navbar/> : ''    } */}
    <Routes>
     {users? <Route path="/Home" element={<Home />} >

     <Route path="/Home/Library" element={<Library />} />

     <Route path="/Home/registration" element={<Registration />} />
     <Route path="/Home/AddAdvertising" element={<AddAdvertising />} />
     <Route path="/Home/CitizenDetails" element={<CitizenDetails />} />
     <Route path="/Home/Analysis" element={<Analysis />} />

     <Route path="/Home/lowyerDetails" element={<LawerDetail />} >
     <Route path="/Home/lowyerDetails/AllLawyerDetails" element={<AllLawyerDetails />} />
     <Route path="/Home/lowyerDetails" element={<AllLawyerDetails />} />
     <Route path="/Home/lowyerDetails/lawyerpending" element={<LawyerPending />} />
     <Route path="/Home/lowyerDetails/Lawyerdeleting" element={<Lawyerdeleting />} />

     </Route>
     <Route path="/Home/erorr" element={<Error />} />
     <Route path="/Home/EmployeDetails" element={< EmployeDetails/>} >
     <Route path="/Home/EmployeDetails/registration" element={< Registration/>} />
     <Route path="/Home/EmployeDetails/AllEmployees" element={< AllEmployees/>} />
     <Route path="/Home/EmployeDetails" element={< AllEmployees/>} />
     </Route>

     <Route path="/Home/addlocation" element={< Addlocations/>} />
     <Route path="/Home/clocks" element={< Clocks/>} />


     </Route> :<Route path="/Home" element={<Login />} />}

{!users?  <Route path="/" element={<Login />} /> :<Route path="/" element={<Home/>} />  }

    
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default Routing
