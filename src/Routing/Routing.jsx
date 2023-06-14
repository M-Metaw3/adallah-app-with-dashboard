import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from '../component/Register/Registration'
import Home from '../component/Home/Home'
import Login from '../component/Login/Login'
import Error from "../component/Erorr";
import EmployeDetails from "../component/EmployeDetails/EmployeDetails";
import LawerDetail from "../component/lawyercomponent/LawerDetail";
import Clocks from '../component/Clocks'
import Addlocations from "../component/Locations/Addlocations";
import AllLawyerDetails from '../component/lawyercomponent/AllLawyerDetails'
import LawyerPending from '../component/lawyercomponent/LawyerPending'
import Lawyerdeleting from '../component/lawyercomponent/Lawyerdeleting'
import AddAdvertising from '../component/AddAdvertising'
import Library from "../component/Library";
import CitizenDetails from "../component/CitizenDetails/CitizenDetails";
import Analysis from "../component/Analysis/Analysis";
import AllEmployees from "../component/EmployeDetails/AllEmployees";
import AllCitizen from '../component/CitizenDetails/AllCitizen';
import LocationsDetails from '../component/Locations/LocationsDetails';
import AllLocations from '../component/Locations/AllLocations';
import Lawyersusbended from '../component/lawyercomponent/Lawyersusbended';
import Courts from '../component/Locations/Courts';
import PoliceDepartments from '../component/Locations/Police-Departments';
import Lawyer from '../component/lawyercomponent/Lawyer';
import Prosecutors from '../component/Locations/Prosecutors';
import CommercialDocumentation from '../component/Locations/CommercialDocumentation';
import CommercialRooms from '../component/Locations/CommercialRooms';
import InvestmentCommissions from '../component/Locations/InvestmentCommissions';
import NotaryOffice from '../component/Locations/NotaryOffice';
import TaxAuthorities from '../component/Locations/TaxAuthorities';
import Governorates from '../component/Governorates/Governorates';
function Routing() {
    const users = JSON.parse(localStorage.getItem("token"))

    return (
    <>
     <BrowserRouter >
    {/* {users?   <Navbar/> : ''    } */}
    <Routes>
     {users? <Route path="/Home" element={<Home />} >

     <Route path="/Home/Library" element={<Library />} />
     <Route path="/Home/Syndicates" element={<Governorates />} />

     <Route path="/Home/registration" element={<Registration />} />
     <Route path="/Home/AddAdvertising" element={<AddAdvertising />} />
     <Route path="/Home/CitizenDetails" element={<CitizenDetails />} >

     <Route path="/Home/CitizenDetails/AllCitizen" element={<AllCitizen />} />

      </Route>
     <Route path="/Home/Analysis" element={<Analysis />} />

     <Route path="/Home/lowyerDetails" element={<LawerDetail />} >
     <Route path="/Home/lowyerDetails/AllLawyerDetails" element={<AllLawyerDetails />} />
     <Route path="/Home/lowyerDetails" element={<AllLawyerDetails />} />
     <Route path="/Home/lowyerDetails/lawyerpending" element={<LawyerPending />} />
     <Route path="/Home/lowyerDetails/Lawyersusbended" element={<Lawyersusbended />} />
     <Route path="/Home/lowyerDetails/Lawyerdeleting" element={<Lawyerdeleting />} />
     </Route>
     <Route path="/Home/lowyerDetails/Lawyer/:id" element={<Lawyer />} />


     <Route path="/Home/erorr" element={<Error />} />
     <Route path="/Home/EmployeDetails" element={< EmployeDetails/>} >
     <Route path="/Home/EmployeDetails/registration" element={< Registration/>} />
     <Route path="/Home/EmployeDetails/AllEmployees" element={< AllEmployees/>} />
     <Route path="/Home/EmployeDetails" element={< AllEmployees/>} />
     </Route>

     <Route path="/Home/LocationsDetails" element={< LocationsDetails/>} >
     <Route path="/Home/LocationsDetails/Addlocations" element={<Addlocations/>} />
     <Route path="/Home/LocationsDetails/Courts" element={< Courts/>} />
     <Route path="/Home/LocationsDetails/PoliceDepartments" element={< PoliceDepartments/>} />
     <Route path="/Home/LocationsDetails/Prosecutors" element={< Prosecutors/>} />
     <Route path="/Home/LocationsDetails/CommercialDocumentation" element={< CommercialDocumentation/>} />
     <Route path="/Home/LocationsDetails/CommercialRooms" element={< CommercialRooms/>} />
     <Route path="/Home/LocationsDetails/InvestmentCommissions" element={< InvestmentCommissions/>} />
     <Route path="/Home/LocationsDetails/NotaryOffice" element={< NotaryOffice/>} />
     <Route path="/Home/LocationsDetails/TaxAuthorities" element={< TaxAuthorities/>} />
     <Route path="/Home/LocationsDetails/All" element={< AllLocations/>} />
     <Route path="/Home/LocationsDetails" element={< Courts/>} />

      </Route>
     <Route path="/Home/clocks" element={< Clocks/>} />


     </Route> :<Route path="/Home" element={<Login />} />}

{!users?  <Route path="/" element={<Login />} /> :<Route path="/" element={<Home/>} />  }

    
    </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default Routing
