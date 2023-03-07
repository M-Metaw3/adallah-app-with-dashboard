import React from 'react';
import { useNavigate } from 'react-router-dom';

const intailstate={
    admin:{},
    allemp:[]
}
export default   (state = intailstate, action ) => {
   
    switch (action.type){

        case "allEmp":
        //    console.log("allEmp")
        //    console.log(action.payload)
           return {...state,allemp:action.payload};

           case "Deleteemp":
           
            // const deleted =JSON.stringify( action.payload.body  )
            // const convertdeleted = (JSON.parse( updated))
            console.log(action.payload)
            // console.log("hiiiiiii"+newEmpDetails)
            const newEmpDetails = state.allemp.filter((el)=>el._id!=action.payload)
            return {...state, allemp:newEmpDetails}

           case "updatedEmp":

           const updated =JSON.stringify( action.payload.body  )
           const convert = (JSON.parse( updated))
        const updatedEmp = state.allemp.map((el)=>el._id!==convert._id?el:convert)
            return {...state, allemp:updatedEmp}

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


