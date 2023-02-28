import React from 'react';
import { useNavigate } from 'react-router-dom';

const intailstate={
    admin:{},
    allemp:[]
}
export default   (state = intailstate, action ) => {
   
    switch (action.type){

        case "allEmp":
           console.log("allEmp")
           console.log(action.payload)
           return {...state,allemp:action.payload};

        case "registration":
           console.log("registration")
           console.log(action.payload)
           return {...state,admin:JSON.parse(localStorage.getItem("token"))};


            case "loggin":
           
            localStorage.setItem("token",JSON.stringify( action.payload))  
            return {...state,admin:JSON.parse(localStorage.getItem("token"))};
     
            case "logout":
           
            localStorage.clear()
        console.log("logginOut")
            return {...state,admin:{}} ;
            case 'error':

            return state;
                

default:
    break;

   

    }

}


