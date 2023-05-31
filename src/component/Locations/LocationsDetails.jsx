import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SearchSection from '../Search-Section/SearchSection';

function LocationsDetails() {
  return (
    <>
           <SearchSection title={"Locations"} setSearchValue={""}/>
        <div className='p-4 employe-details'>
        <NavLink  to="/Home/LocationsDetails/Courts" className={`btn px-4 me-2`}>Courts</NavLink>
        <NavLink  to="/Home/LocationsDetails/PoliceDepartments" className={`btn px-4 me-2`}>Police Departments</NavLink>
        <NavLink  to="/Home/LocationsDetails/Prosecutors" className={`btn px-4 me-2`}>Prosecutors</NavLink>
        <NavLink  to="/Home/LocationsDetails/CommercialRooms" className={`btn px-4 me-2`}>Commercial Rooms</NavLink>
        <NavLink  to="/Home/LocationsDetails/NotaryOffice" className={`btn px-4 me-2`}>Notary Office</NavLink>
        <NavLink  to="/Home/LocationsDetails/CommercialDocumentation" className={`btn px-4 me-2`}>Commercial Documentation</NavLink>
        <NavLink  to="/Home/LocationsDetails/InvestmentCommissions" className={`btn px-4 me-2`}>Investment Commissions</NavLink>
        <NavLink  to="/Home/LocationsDetails/TaxAuthorities" className={`btn px-4 me-2`}>Tax Authorities</NavLink>

        <NavLink  to="/Home/LocationsDetails/Addlocations" className={`btn px-4 me-2`}>Add</NavLink>
        
        <div>
          <Outlet/>       
        </div>
        </div>    
        
      </>
  )
}

export default LocationsDetails
