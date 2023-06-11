import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./sidebar.css"
function Sidebar() {
  return (
    <>
    <div className='sidebar d-flex justify-content-between flex-column z-3  vh-100'>
       <div>
            <div className='p-3'>
                <img src={require('../../assets/images/logoo.png')} width={"100%"} alt="" />            
            </div>
            <div className='list-group mx-3 my-4'>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to={'/'}>Dashboard</NavLink>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to={'/Home/Analysis'}>Analysis</NavLink>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to="/Home/lowyerDetails">Lawyer Details</NavLink>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to={'/Home/CitizenDetails'}>Citizen Details</NavLink>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to="/Home/EmployeDetails">Employee Details</NavLink>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to={'/Home/AddAdvertising'}>Advertisements</NavLink>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to={'/Home/Library'}>Library</NavLink>
                    <NavLink  className='py-2 my-1 px-5 rounded-3' to={'/Home/LocationsDetails'}>Locations</NavLink>
            </div>
       </div>
    </div>
      
    </>
  )
}

export default Sidebar
