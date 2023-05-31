import React from 'react'
import SearchSection from '../Search-Section/SearchSection'
import { NavLink, Outlet } from 'react-router-dom'

function CitizenDetails() {
  return (
    <>
        <SearchSection title={"Citizen Details"} setSearchValue={""}/>
        <div className='p-4 employe-details'>
        <NavLink  to="/Home/CitizenDetails/AllCitizen" className={`btn px-4 me-2`}>All
        </NavLink>
        <NavLink to="/Home/CitizenDetails/" className={`btn px-4 me-2`}>Susbended
        </NavLink>
        <NavLink to="/Home/CitizenDetails/Lawyerdeleting" className={`btn px-4 me-2`}>Deleted
        </NavLink>
        </div>    
        <div>
        <Outlet/>
        </div>
    </>
  )
}

export default CitizenDetails
