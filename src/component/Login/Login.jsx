import React from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { useEffect,useState  } from "react";
import registrationAction from'../../action/postaction'
import { useNavigate } from 'react-router-dom';
import './loggin.css'
import mmm from '../../action/postaction'
import { Button } from 'bootstrap';
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
        <div className='login text-center d-flex justify-content-center align-items-center'>
              <div className='form col-9 col-sm-7 col-md-5 col-lg-4 d-flex flex-column justify-content-center rounded-5'>
                    <div className='col-12 d-flex justify-content-center mb-5'>
                        <img src={require('../../assets/images/logo.png')} width={"50%"} alt="logo" />
                    </div>
                <form action="" className='row d-flex justify-content-center'>
                    <div className="mb-3 col-9">
                      <input className="form-control" value={loggin.email} onChange={(e) => setloggin({ ...loggin, email: e.target.value })} type="email" name="email" id="email" placeholder='Email' />
                    </div>
                    <div className="mb-3 col-9">
                    <input className="form-control" value={loggin.password} min={"9"} onChange={(e) => setloggin({ ...loggin, password: e.target.value })} type="password" name="pass" id="pass" placeholder='Password' />
                    </div>
                    <div className="mb-3 mt-5 col-9">
                        <input className="btn login_btn w-100" type={'button'}  onClick={loginMethod} value="Login" />
                    </div>
           
                </form>
                </div>

             </div>
      
    );
}
export default Login;


