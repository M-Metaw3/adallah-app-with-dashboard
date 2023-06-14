import React, { useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SearchSection from '../Search-Section/SearchSection';
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import "./location.css"
function LocationsDetails() {
  const scrl = useRef()
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const list = [
    // {title:"All",rout:"/Home/LocationsDetails/All"},
    {title:"Courts",rout:"/Home/LocationsDetails/Courts"},
    {title:"Police Departments",rout:"/Home/LocationsDetails/PoliceDepartments"},
    {title:"Prosecutors",rout:"/Home/LocationsDetails/Prosecutors"},
    {title:"Commercial Rooms",rout:"/Home/LocationsDetails/CommercialRooms"},
    {title:"Notary Office",rout:"/Home/LocationsDetails/NotaryOffice"},
    {title:"Commercial Documentation",rout:"/Home/LocationsDetails/CommercialDocumentation"},
    {title:"Investment Commissions",rout:"/Home/LocationsDetails/InvestmentCommissions"},
    {title:"Tax Authorities",rout:"/Home/LocationsDetails/TaxAuthorities"},
    {title:"Add",rout:"/Home/LocationsDetails/Addlocations"},

    
    
  ]
  
  return (
    
    <>
        <SearchSection title={"Locations"} setSearchValue={""}/>
        <div className='p-4 employe-details d-flex align-items-center '>
        
        
        <div className='align-items-center d-flex justify-content-between list' ref={scrl}>
          {
           list.map((el)=>
           (
            <NavLink key={el.title} to={el.rout} className={`btn px-4 me-2`}>{el.title}</NavLink>

           )) 
          }
        </div> 
 
        {/* <button  >More <i className="fa-solid fa-angle-right"></i></button> */}
        {!scrolEnd && (
        <button className={`btn px-4 me-2`} onClick={() => slide(200)}>
          <i className="fa fa-angle-right"></i>More
        </button>
      )}    

{scrollX !== 0 &&scrolEnd && (
        <button className={`btn px-4 me-2`} onClick={() => slide(-200)}>
          <i className="fa fa-angle-left"></i>Less
        </button>
      )}
              </div>
    
        <div>
        <Outlet/>       
        </div>
      
          
        
      </>
  )
}

export default LocationsDetails
