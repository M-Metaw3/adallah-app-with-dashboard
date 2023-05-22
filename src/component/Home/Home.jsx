import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import postaction from '../../action/postaction';
import './home.css'
import Error from '../Erorr';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
// import Addlocations from "./component/Addlocations";

const Home = () => {
    const dispatch = useDispatch()
//////////////////////////////////////////////////////
useEffect(() => {
    console.log("getEmpDetails");
    dispatch( postaction.getAllemp())
}, [dispatch]);

    const seasons = ["Spring", "Summer", "Autumn", "Winter"]
    const [toggle,SetToggle]=useState(false);
    useEffect(() => {
        const handleSize=()=>{
            if(window.innerWidth<991)
            SetToggle(true)
            else{
                SetToggle(false)
            }
        }
        window.addEventListener('resize',handleSize);
        return ()=>{
            window.addEventListener('resize',handleSize);

        }
    },[])
    return (
            <>
            <div className='d-flex'>
                <div className=' w-auto'>
                
                <div className={`${toggle ?'d-none ':' d-block  position-fixed z-3'}`}>
                    <Sidebar/>
                </div>
                <div className={`${toggle ?' d-none ':' invisible'}`}>
                    <Sidebar/>
                </div>

                </div>
                
                <div className='col overflow-auto content'>
                        <div className=''>
                        <a className='d-flex justify-content-end d-lg-none' onClick={()=>SetToggle(!toggle)}>
                        <i className="fa-solid fa-bars"></i>
                        </a> 
                        <Outlet/>
                        </div>
                </div>
                <div className='w-auto'>
                <div className='invisible'>
                <Navbar/>
                </div>
                <div className=' border-start position-fixed top-0 end-0'>
                <Navbar/>
                </div>
                </div>
                
            </div>




            </>
//         <div className='container'>
//         <div className='Home'>

// <Link  >deleted account</Link>
// <Link to="/Home/registration">Add employee Email</Link>
// <Link to='/Home/erorr'>users analsis</Link>
// <Link to='/Home/AddAdvertising'>add advirtise</Link>
// <Link to="/Home/lowyerDetails">lawyer details</Link>
// <Link to="/Home/Library">Library</Link>

// <Link href="">citiziens details</Link>
// <Link to="/Home/EmployeDetails">EmployeDetails</Link>
// <Link to="/Home/clocks">clocks</Link>
// <Link to='/Home/addlocation'>add locations</Link>    
//         </div>
// <div className='nested_component'>
//             <Outlet/>
//         </div>
            
//         </div>
    );
}

export default Home;
