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
        <h1 onClick={hadelerlogout}>Logout</h1>
        </div>
    );
}

export default Logout;
