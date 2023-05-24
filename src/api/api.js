
import axois from "axios"
const url = 'http://localhost:10000/post'
const adminSingnIn ='http://localhost:10000/admin'
const getemployee = 'http://localhost:10000/admin'
const logginEmployee = "http://localhost:10000/admin/loggin"
const updateEmployee = 'http://localhost:10000/admin/update'
const deleteEmp = 'http://localhost:10000/admin/delete'
const susbendEmp = 'http://localhost:10000/admin/suspened'
const deleteUser = 'http://localhost:10000/adala/user'
const addPlacesApi ='http://localhost:10000/locations'
const clock ='http://localhost:5000/admin/addworkhours'
const getalllaweyers = 'http://localhost:10000/adala/lawyer'




////////////////////////////////////////////////////////////////////////////////////


const token = JSON.parse(localStorage.getItem("token"))

//////////////////////////////////////////////////////////////////////////////////////////


export const regapi= async (body) => {
  try {
    return  await fetch(
      adminSingnIn,
      {
        method: "post",
        headers: {
          "Content-Type": " application/json",
          // Authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify(body),
      }
    );
    
  } catch (error) {

  }

  
}

export const Loggin= async (body) => {
  try {
    return  await fetch(
      logginEmployee,
    
      {
        method: "post",
        headers: {
          "Content-Type": " application/json",
          // Authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify(body),
      }
    );
    
  } catch (error) {

    
    
  }}


  export const getemp = async()=>{

    try {
      
      return fetch(getemployee,{
        method:"get",
        headers: {
          "Content-Type": " application/json",
          Authorization: `Bearer ${token.token}`,
        },
      })
    } catch (error) {   
    }}
//////////////////////////////////////////////////////////////////////////////////////
export const updateEmp = async(id,body)=>{

  try {
    
    return await fetch(updateEmployee+'/'+id,{
      method:"PATCH",
      headers: {
        "Content-Type": " application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body:JSON.stringify(body)

    })
  } catch (error) {
    
  }
}

///////////////////////////////////////////////////////////////
export const deletedEmp = async(id)=>{
  try {
    console.log(id)
    
    return await fetch(deleteEmp+'/'+id,{
      method:"DELETE",
      headers: {
        "Content-Type": " application/json",
        // Authorization: `Bearer ${token.token}`,
      },
      // body:JSON.stringify(body)

    })
  } catch (error) {
    
  }
}
export const susbendedEmp = async(id)=>{
  try {
    console.log(id)
    return await fetch(susbendEmp+'/'+id,{
      method:"PATCH",
      headers: {
        "Content-Type": " application/json",
        // Authorization: `Bearer ${token.token}`,
      },
      // body:JSON.stringify(body)

    })
  } catch (error) {
    
  }
}
export const Locations = async (body) => {
  console.log(JSON.stringify( body))
try {

return  await fetch(
  addPlacesApi ,

  {
    method: "post",
    headers: {
      "Content-Type": " application/json",
      // Authorization: `Bearer ${token.token}`, 
    },
    body:JSON.stringify(body),
  }
);

} catch (error) {
console.log(error)
}

}

export const addworkhours = async (body) => {

try {

return  await fetch(
  clock,

  {
    method: "post",
    headers: {
      "Content-Type": " application/json",
      // Authorization: `Bearer ${token.token}`, 
    },
    body:JSON.stringify(body),
  }
);

} catch (error) {
console.log(error)
}

}

export const getallworkhour = async () => {

  try {
  
  return  await fetch(
    clock,
  
    {
      method: "get",
      headers: {
        "Content-Type": " application/json",
        // Authorization: `Bearer ${token.token}`, 
      },
      // body:JSON.stringify(body),
    }
  );
  
  } catch (error) {
  console.log(error)
  }
  
  }

//////////// Lawyers ///////////////////////
export const getAllLawyers = async()=>{
    try {  
      return await fetch(getalllaweyers,{
        method:"get",
        // headers: {
        //   "Content-Type": " application/json",
        //   Authorization: `Bearer ${token.token}`,
        // },
      })
    } catch (error) {
      
    }}

    export const deleteLawyer = async(id)=>{
      try {
        return await fetch(deleteUser+'/'+id,{
          method:"DELETE",
          headers: {
            "Content-Type": " application/json",
            // Authorization: `Bearer ${token.token}`,
          },
          // body:JSON.stringify(body)
    
        })
      } catch (error) {
        
      }
    }