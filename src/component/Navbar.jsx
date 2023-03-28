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

//    const clock = new Date()


    return (
        <div className='nav-bar'>
        {/* <p>{clock.getHours()}:{clock.getMinutes()}:{clock.getSeconds()}</p> */}


            {employeeInfo?
            
<div style={{display:'flex'}}>
    <div>
    <h1>Adalla</h1>
    </div>
            <div>
            <img src={employeeInfo.body.image} alt=""  width={50}/>
            </div>
            <p>{employeeInfo.body.name}</p>

            
            <div>
            <Logout/>
            
            </div>
            </div>   : <h1>no internet</h1>
            
            
            
            
            
            
            }
        </div>
    );
}

export default Navbar;
