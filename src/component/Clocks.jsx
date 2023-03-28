import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import dashboard from '../action/postaction'
const Clocks = () => {
const [clock,setclock] = useState({emailCusromerSerive:'',position:'',hours:'', minutes:''})
const dispatch = useDispatch()

const {workshours} = useSelector((state)=>state)

console.log(workshours);
const handelerClock = () => {

dispatch(dashboard.addworkHours(clock))

}


useEffect(()=>{
    dispatch(dashboard.getworkHours())
},[])

    return (
        <div>
            <div style={{display:"flex",flexDirection:"column"}}>
            {clock.position=="customerService" ?  <div> <label htmlFor="email">email</label>
                 <input required onChange={(e)=>{setclock({...clock,emailCusromerSerive:e.target.value})}}  type='email'  /> </div>:""}
                 <label htmlFor="hours">hours</label>
                 <input onChange={(e)=>{setclock({...clock,hours:e.target.value})}} type='number'  />
                 <label htmlFor="minutes">minutes</label>
                 <input onChange={(e)=>{setclock({...clock,minutes:e.target.value})}}  type='number'  />
                 <label htmlFor="position"> position:</label>
                
                 
                            <select  onChange={(e)=>{setclock({...clock,position:e.target.value})}} required name="Category" id="cars">
                           
                                <option value="Admin">Admin</option>
                                <option value="customerService"> customer Service</option>
                                <option value="markting">markting</option>

                            </select>
                 <button onClick={handelerClock}>submit</button>




                 
        </div>
{/* 
        <div>
{!workshours?'':
workshours.map((el)=>(
    <div style={{display:"flex"}}>

        <p>{el.hours}</p>
      

        <p>{el.minutes}</p>
      
        <p>{el.emailCusromerSerive}</p>
      

      <p>{el.position}</p>
      
    </div>
))

}



        </div> */}


        </div>

        
    );
}

export default Clocks;
