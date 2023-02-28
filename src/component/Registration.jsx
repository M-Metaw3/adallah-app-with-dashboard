import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import FileBase from "react-file-base64"
import { useNavigate } from 'react-router-dom';
import moment from "moment"



 import posts from "../action/postaction"

const Registration = () => {
    

    const users = JSON.parse(localStorage.getItem("token"))

const [registration, setregistration] = useState({name:'', email:'',password:'',con_password:'',image:'',position:''});
const dispatch = useDispatch()
const [eror, seteror] = useState("");
const nav = useNavigate()


// console.log( moment(Date).fromNow());
const reg =(e) => {

    if(registration.password!=registration.con_password)return seteror("password dosn,t matching")

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

  
// setregistration({name:'', email:'',password:'',con_password:'',image:'',postion:''})

  
}




    return (
        <>        
        <div className='mm' style={{display:"flex",flexDirection:"column",width:"50%",color:'red'}}>
            
  <label  htmlFor="name">name</label>
       <input value={registration.name}  onChange={(e)=>setregistration({...registration,name:e.target.value})} type="text" placeholder='name'  />
       <label htmlFor="email">email</label>
       <input value={registration.email}  onChange={(e)=>setregistration({...registration,email:e.target.value})} type="email" name="email" id="email" />
       <label htmlFor="pass">password</label>
       <input value={registration.password}  min={"9"} onChange={(e)=>setregistration({...registration,password:e.target.value})} type="password" name="pass" id="pass" />
       <label  htmlFor="conpass">confirm  password</label>
       <input value={registration.con_password}  min={"9"}  onChange={(e)=>setregistration({...registration,con_password:e.target.value})} type="password" name="conpass" id="conpass" />

       <div>

        <img value={registration.image}  srcSet={registration.image} alt="" width={250}  />
       </div>
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



            
        </div>
  
        </>

    );
}

export default Registration;
