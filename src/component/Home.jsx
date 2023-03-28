import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import postaction from '../action/postaction';

import './style/home.css'
import Registration from './Registration';
import Error from './Erorr';
// import Addlocations from "./component/Addlocations";

const Home = () => {
    const dispatch = useDispatch()
//////////////////////////////////////////////////////
useEffect(() => {
    console.log("getEmpDetails");
    dispatch( postaction.getAllemp())
}, [dispatch]);

    const seasons = ["Spring", "Summer", "Autumn", "Winter"]
    return (
        <div className='container'>
        <div className='Home'>

<Link  >deleted account</Link>
<Link to="/Home/registration">Add employee Email</Link>
<Link to='/Home/erorr'>users analsis</Link>
<Link to='/Home/AddAdvertising'>add advirtise</Link>
<Link to="/Home/lowyerDetails">lawyer details</Link>
<Link to="/Home/Library">Library</Link>

<Link href="">citiziens details</Link>
<Link to="/Home/EmployeDetails">EmployeDetails</Link>
<Link to="/Home/clocks">clocks</Link>
<Link to='/Home/addlocation'>add locations</Link>








               
              
    
        </div>
<div className='nested_component'>
            <Outlet/>
        </div>
            
        </div>
    );
}

export default Home;
