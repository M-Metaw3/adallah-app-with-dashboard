import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style/home.css'
import Registration from './Registration';
import Error from './Erorr';
const Home = () => {

    const seasons = ["Spring", "Summer", "Autumn", "Winter"]
    return (
        <div className='container'>
        <div className='Home'>
            {/* <Link to="/post" style={{textDecoration:"none", color:"black", cursor:'default'} }> */}

<Link >deleted account</Link>
<Link to="/Home/registration">Add employee Email</Link>
<Link to='/Home/erorr'>users analsis</Link>
<Link href="">add advirtise</Link>
<Link href="">lawyer details</Link>
<Link href="">citiziens details</Link>
<Link to="/Home/EmployeDetails">EmployeDetails</Link>









               
              
         {/* </Link> */}
    
        </div>
<div className='nested_component'>
            <Outlet/>
        </div>
            
        </div>
    );
}

export default Home;
