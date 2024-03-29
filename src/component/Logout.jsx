import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import action from '../action/postaction'
const Logout = () => {
  const nav = useNavigate()
const dispatch = useDispatch()
    const hadelerlogout= async() => {
    
     await dispatch(action.logOut())
     nav('/')
    }
    return (
        <div>
        <h6 className=' my-3 pointer' onClick={hadelerlogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></h6>
        </div>
    );
}

export default Logout;
