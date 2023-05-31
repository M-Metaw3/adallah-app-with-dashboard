import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Logout from '../Logout';
import './navbar.css'
const Navbar = () => {
    const selector = useSelector((state) => state)
    const [employeeInfo, setemployeeInfo] = useState()

    useEffect(() => {


        setemployeeInfo(
            JSON.parse(localStorage.getItem("token"))
        )

    }, [])

    //    const clock = new Date()


    return (
        <>
            {/* <p>{clock.getHours()}:{clock.getMinutes()}:{clock.getSeconds()}</p> */}

            {employeeInfo ?
                <div className=' d-flex flex-column justify-content-between align-items-center   z-3 vh-100'>
                <img src={employeeInfo.body.image} alt="" width={40} className=' rounded-circle my-3 mx-2' />
                    {/* <p>{employeeInfo.body.name}</p> */}
                <div className='my-4'>
                <i className="pointer fa-solid fa-gear my-3"></i>
                <Logout/>
                </div>
                </div>
                 : <h1>no internet</h1>
            }
        </>
    );
}

export default Navbar;
