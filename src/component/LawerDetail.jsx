import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SearchSection from './Search-Section/SearchSection';

const LawerDetail = () => {


    return (
        <>
        <SearchSection title={"Lawyer Details"} setSearchValue={""}/>
        <div className='p-4 employe-details'>
        <NavLink  to="/Home/lowyerDetails/AllLawyerDetails" className={`btn px-4 me-2`}>All
        </NavLink>
        <NavLink to="/Home/lowyerDetails/lawyerpremium" className={`btn px-4 me-2`}>Premium
        </NavLink>
        <NavLink to="/Home/lowyerDetails/lawyerpending" className={`btn px-4 me-2`}>pending
        </NavLink>
        <NavLink to="/Home/lowyerDetails/" className={`btn px-4 me-2`}>Susbended
        </NavLink>
        <NavLink to="/Home/lowyerDetails/Lawyerdeleting" className={`btn px-4 me-2`}>Deleted
        </NavLink>

        <NavLink to="/Home/lowyerDetails/"className={`btn px-4 me-2`}>High Related
        </NavLink>
        <NavLink to="/Home/lowyerDetails/" className={`btn px-4 me-2`}>High Reactive
        </NavLink>
        </div>    
        <div>
        <Outlet/>
        </div>
        </>
    );
}

export default LawerDetail;
