import React from 'react';
import { useEffect,useState  } from "react";
import { useDispatch ,useSelector } from 'react-redux';
import Logout from './Logout';
import './style/navbar.css'
const Navbar = () => {
    const selector = useSelector((state)=>state)
        const [employeeInfo,setemployeeInfo]= useState()

   useEffect(()=>{

   
   setemployeeInfo(      
        JSON.parse(localStorage.getItem("token"))
    )


   },[])
    return (
        <div className='nav-bar'>
        
            {employeeInfo?
            
<div style={{display:'flex'}}>
    <h1>A d a l l a</h1>
            <h1>{employeeInfo.body.name}</h1>
            <img src={employeeInfo.body.image} alt=""  width={50}/>
            <Logout/>
            
            
            </div>   : <h1>no internet</h1>
            
            
            
            
            
            
            }
        </div>
    );
}

export default Navbar;
