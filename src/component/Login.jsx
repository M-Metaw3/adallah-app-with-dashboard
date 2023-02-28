import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import registrationAction from'../action/postaction'
import { useNavigate } from 'react-router-dom';
import './style/loggin.css'
import mmm from '../action/postaction'
const Login = () => {
    // const selector = useSelector((state)=>state)
// const token = JSON.parse(localStorage.getItem("token"))
const nav = useNavigate()

const dispatch = useDispatch()
const [loggin, setloggin] = useState({ email:'',password:''});

const loginMethod= async() => {

await dispatch(   registrationAction.loginAction(loggin))
 nav('/Home')



  console.log("done");
}



    return (
        <div className='form'>
                  <label htmlFor="email">email</label>
       <input value={loggin.email}  onChange={(e)=>setloggin({...loggin,email:e.target.value})} type="email" name="email" id="email" />
       <label htmlFor="pass">password</label>
       <input value={loggin.password}  min={"9"} onChange={(e)=>setloggin({...loggin,password:e.target.value})} type="password" name="pass" id="pass" />
      <button onClick={loginMethod}>Login</button>
        </div>
    );
}

export default Login;
