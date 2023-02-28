import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';

import dashboard from '../action/postaction'
const EmployeDetails = () => {

const dispatch = useDispatch()

    const getEmpDetails = () => {
        console.log("getEmpDetails");
    dispatch( dashboard.getAllemp())
    }

    const allemp = useSelector((state)=>state)
    return (
        <div>
        <h1 onClick={()=>getEmpDetails()}>EmployeDetails</h1>
         <div>
{allemp?
<div>
{allemp.allemp.map((el)=>(<div>
    <h1>{el.name}</h1>
    <h1>{el.email}</h1>
  <h1>{el.position}</h1>
    <img src={el.image} alt="" srcset="" />


    </div>))}</div>: <h1>loading</h1>}
        </div> 
        </div>
    );
}

export default EmployeDetails;
