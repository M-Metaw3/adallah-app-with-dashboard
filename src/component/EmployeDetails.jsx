import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import FileBase from "react-file-base64"
import postaction from '../action/postaction';
import dashboard from '../action/postaction'
import './style/Employee.css'
const EmployeDetails = () => {
const [showUpdate,setshowUpdate] = useState(false)
const [updateEmp,setupdateEmp] = useState({image:'',name:'',position:'',email:'',id:''})

const dispatch = useDispatch()
////////////////////////////////////////////////////
useEffect(() => {
    console.log("getEmpDetails");
    dispatch( postaction.getAllemp())
}, [dispatch]);


////////////////////////    ////////////////////////////////    
const handelerDelete = (id) => {
 dispatch(dashboard.deleteemploye(id))
}

//////////////////////////////////////////////////////
const handelerUpdate = (el) => {
    console.log("handelerUpdate");
    setshowUpdate(true)
    setupdateEmp  ({image:el.image,name:el.name,position:el.position,email:el.email,id:el._id})
    console.log(el);
}
////////////////////////////////////////////////////////////
const handelerUbdatePasswords = () => {
    console.log("handelerUbdatePasswords");
  
}
//////////////////////////////////////////////////
const handelerSusbened  = () => {
    console.log("handelerSusbened");
  
}
////////////////////////////////////////////////////////////////////////
const handelerubdatedetails = (id) => {


    dispatch(postaction.apdateemploye(id,updateEmp))
    setshowUpdate(false)  

  ;
}
/////////////////////////////////////////////////////////////
const handelerCancel = () => {
    setshowUpdate(false)
  
}
//////////////////////////////////////////////////////////////////







    const allemp = useSelector((state)=>state)

    //////////////////////////////////////////////////////////////////
    return (
        <div>
        <h1>EmployeDetails</h1>
         <div>
{allemp?
<div>
{allemp.allemp.map((el)=>(<div>
    <h1>{el.name}</h1>
    <h1>{el.email}</h1>
  <h1>{el.position}</h1>
    <img style={{width:150}} src={el.image}  />
<button onClick={()=>handelerDelete(el._id)}>Delete</button>
<button onClick={()=>handelerUpdate(el)}>Update</button>
<button onClick={()=>handelerUbdatePasswords(el._id)}>Update Password</button>

<button onClick={()=>handelerSusbened(el._id)}>Susbened</button>

    </div>))}</div>: <h1>loading .....</h1>}
        </div>
        {showUpdate?    
    
<div className="select_cat">
<img width={150}  src={updateEmp.image}/>
    <label htmlFor="name">name</label>
    <input value={updateEmp.name} onChange={(e)=>setupdateEmp({...updateEmp,name:e.target.value})} name={updateEmp.name}  type="text" />
    <label htmlFor="email">email</label>
    <input name={updateEmp.name} value={updateEmp.email} onChange={(e)=>setupdateEmp({...updateEmp,email:e.target.value})} type="email" />
    <div >
                 <label htmlFor="position"> position:</label>
       <select required onChange={(event) => setupdateEmp({...updateEmp, position: event.target.value})} name="Category" id="cars">
             <option value={updateEmp.position} > {updateEmp.position}</option>
             <option value="Admin">Admin</option>
             <option value="customerService"> customer Service</option>
             <option value="markting">markting</option>
                            </select>
                        </div>
                        <FileBase
type="file"
onDone={({base64})=>setupdateEmp({...updateEmp,image:base64})}
value={updateEmp.image} 

/>
    <button onClick={()=>handelerubdatedetails(updateEmp.id)}> confirm </button>
    <button onClick={handelerCancel}> cancel </button>

</div> :""
    }
        </div>
    );
}

export default EmployeDetails;
