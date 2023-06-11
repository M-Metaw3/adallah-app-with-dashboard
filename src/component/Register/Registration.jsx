import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import FileBase from "react-file-base64"
import { useNavigate } from 'react-router-dom';
import moment from "moment"



 import posts from "../../action/postaction"
import Clocks from '../Clocks';

const Registration = () => {
    
    const users = JSON.parse(localStorage.getItem("token"))
    const [registration, setregistration] = useState({name:'', email:'',password:'',con_password:'',image:'',position:'',startallowedLoginHour:'',endallowedLoginHour:''});
    const dispatch = useDispatch()
    const [eror, seteror] = useState("");
    const nav = useNavigate();


// console.log( moment(Date).fromNow());
const reg =(e) => {

    if(registration.password!=registration.con_password)return seteror("password dosn't matching")

console.log(registration);
    dispatch(posts.registeremp(
    {
        name:String( registration.name),
        email: String(registration.email),
        password: String(registration.password),
      con_password: String(registration.con_password),
      image: String(registration.image),
      position: String(registration.position)

     })



)

    // nav('/')    
    // nav('/registration')
setregistration({name:'', email:'',password:'',con_password:'',image:'',position:'',startallowedLoginHour:'',endallowedLoginHour:''})

  
}




    return (
        <>        
        {/* <div className='mm' style={{display:"flex",flexDirection:"column",width:"50%",color:'red'}}>
            
  <label  htmlFor="name">name</label>
       <input   />
       <label htmlFor="email">email</label>
       <input  />
       <label htmlFor="pass">password</label>
       <input  />
       <label  htmlFor="conpass">confirm  password</label>
       <input  />

       
<FileBase
type="file"
onDone={({base64})=>setregistration({...registration,image:base64})}
value={registration.image} 

/>
     
<div className="select_cat">
                            <label htmlFor="position"> position:</label>
                            <select required onChange={(event) => setregistration({...registration, position: event.target.value})} name="Category" id="cars">
                            <option >Select Category</option>
                                <option value="Admin">Admin</option>
                                <option value="customerService"> customer Service</option>
                                <option value="markting">markting</option>

                            </select>
                        </div>

      <button onClick={reg}>submit</button>
      
      <p>{eror}</p>            
        </div> */}
  
        <div className='py-5  d-flex justify-content-center align-items-center'>                   
                <form action="" className='row d-flex justify-content-center m-0'>
                    <div className="mb-3 col-10 col-lg-7">
                      <input className="form-control" value={registration.name}  onChange={(e)=>setregistration({...registration,name:e.target.value})} type="text" placeholder='Name' />
                    </div>
                    <div className="mb-3 col-10 col-lg-7">
                    <input className="form-control" value={registration.email}  onChange={(e)=>setregistration({...registration,email:e.target.value})} type="email" name="email" id="email" placeholder='Email' />
                    </div>
                    <div className="mb-3 col-10 col-lg-7">
                    <input className="form-control" value={registration.password}  min={"9"} onChange={(e)=>setregistration({...registration,password:e.target.value})} type="password" name="pass" id="pass" placeholder='Password' />
                    </div>
                    <div className="mb-3 col-10 col-lg-7">
                    <input className="form-control" value={registration.con_password}  min={"9"}  onChange={(e)=>setregistration({...registration,con_password:e.target.value})} type="password" name="conpass" id="conpass" placeholder='Confirm Password' />
                    </div>
                    
                    <div className="mb-3 col-10 col-lg-7">
                            <select className='form-select' required onChange={(event) => setregistration({...registration, position: event.target.value})} name="Category" id="cars">
                                <option >Select Category</option>
                                <option value="Admin">Admin</option>
                                <option value="customerService"> customer Service</option>
                                <option value="markting">markting</option>
                            </select>
                        </div>
                        <div className="mb-3 col-10 col-lg-7">
                            <input className="form-control" value={registration.startallowedLoginHour}  onChange={(e)=>setregistration({...registration,startallowedLoginHour:e.target.value})} type="number" name="startallowedLoginHour" id="startallowedLoginHour" placeholder='Start Hour' />
                        </div>

                        <div className="mb-3 col-10 col-lg-7">
                            <input className="form-control" value={registration.endallowedLoginHour}  onChange={(e)=>setregistration({...registration,endallowedLoginHour:e.target.value})} type="number" name="endallowedLoginHour" id="endallowedLoginHour" placeholder='End Hour' />
                        </div>
                        <div className="mb-3 col-10 col-lg-7">
                        <div className='form-control'>
                        <FileBase
                        type="file"
                        onDone={({base64})=>setregistration({...registration,image:base64})}
                        value={registration.image} 
                        />
                        </div>
                    </div>
                    {registration.image?<div className="mb-3 col-10 col-lg-7">
                        <img value={registration.image}  srcSet={registration.image} alt="" width={250}  />
                    </div> :""}
                    
                    <div className="mb-3 mt-3 col-10 col-lg-7">
                        <input className="btn login_btn w-100" type={'button'}  onClick={reg} value="Register" />
                        <p>{eror}</p>            

                    </div>
                </form>
             </div>
        </>

    );
}

export default Registration;
