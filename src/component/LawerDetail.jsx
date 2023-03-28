import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LawerDetail = () => {
    return (
        <div>
        <div>
<Link to="/Home/lowyerDetails/Lawyerdeleting">lawyer delete</Link>
<Link to="/Home/lowyerDetails/lawyerpending">lawyerpending</Link>
<Link to="/Home/lowyerDetails">lawyer susbended</Link>
<Link to="/Home/lowyerDetails/AllLawyerDetails">All lawyer </Link>
<Link to="/Home/lowyerDetails/lawyerpremium">lawyerpremium</Link>
<Link to="/Home/lowyerDetails">lawyer best consulting</Link>
    
        </div>
        <div>

        <Outlet/>

        </div>
        </div>
    );
}

export default LawerDetail;
