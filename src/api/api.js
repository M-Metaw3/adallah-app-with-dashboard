
import axois from "axios"
 const url = 'http://localhost:8000/post'
 const adminSingnIn ='http://localhost:5000/admin'
 const getemployee = 'http://localhost:5000/admin'
 const logginEmployee = "http://localhost:5000/admin/loggin"
 const updateEmployee = 'http://localhost:5000/admin/update'
const deleteEmp = 'http://localhost:5000/admin/delete'
const addPlacesApi ='http://localhost:5000/locations'
const clock ='http://localhost:5000/admin/addworkhours'


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