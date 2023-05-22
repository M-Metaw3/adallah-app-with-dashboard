import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import postaction from '../../action/postaction';
import './Employee.css'
import SearchSection from '../Search-Section/SearchSection';
import { NavLink, Outlet } from 'react-router-dom';
const EmployeDetails = () => {
   


const dispatch = useDispatch()
////////////////////////////////////////////////////


const handelerUbdatePasswords = () => {
    console.log("handelerUbdatePasswords");
  
}


    const {allemp} = useSelector((state)=>state.post)
    //////////////////////////////////////////////////////////////////



    const [searchValue, setSearchValue] = useState("");
    const searchedProduct=allemp?.filter((emp) => {
        if(searchValue===""){
          return emp;
        }
        if(emp.name.includes(searchValue.toLowerCase()))
        {
          return emp;
        }
        else
        {
          return 0;
        }
      });
      useEffect(() => { 
        if(searchValue)
        console.log(searchValue);
        else
        {
            console.log(searchValue);
        }
      },[searchValue]);

      const [Position, setPosition] = useState("All");
      
    return (

        <>
        <SearchSection title={"Employe Details"} setSearchValue={setSearchValue}/>

        <div className='p-4 employe-details'>
        <NavLink to="/Home/EmployeDetails/AllEmployees" className={`btn px-4 me-2`} onClick={()=>setPosition("all")}>All
        </NavLink>
        <NavLink to="/Home/EmployeDetails/lawyerpremium"className={`btn px-4 me-2`} onClick={()=>setPosition("Admins")}>Admins
        </NavLink>
        <NavLink to="/Home/EmployeDetails/lawyerpending"className={`btn px-4 me-2`} onClick={()=>setPosition("Customer Service")}>Customer Service
        </NavLink>
        <NavLink to="/Home/EmployeDetails/"className={`btn px-4 me-2`} onClick={()=>setPosition("Marketing")}>Marketing
        </NavLink>
        <NavLink to="/Home/EmployeDetails/" className={`btn px-4 me-2`}>Susbended
        </NavLink>
        <NavLink to="/Home/EmployeDetails/Lawyerdeleting" className={`btn px-4 me-2`}>Deleted
        </NavLink>        
        <NavLink to="/Home/EmployeDetails/registration" className={`btn px-4 me-2`}>Add
        </NavLink>
        </div>    
        <div className='px-4 '>
            <span className=''>Total : {allemp?.length}</span>
            <Outlet/>       
        </div>
        
      </>
    );
}

export default EmployeDetails;
