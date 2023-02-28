
import axois from "axios"
 const url = 'http://localhost:8000/post'
 const adminSingnIn ='http://localhost:5000/admin'
 const logginEmployee = 'http://localhost:5000/admin/loggin'
 const getemployee = 'http://localhost:5000/admin'

////////////////////////////////////////////////////////////////////////////////////

// const token = localStorage.getItem("token")
const token = JSON.parse(localStorage.getItem("token"))
// export const getposts = () => {
//    console.log(token.token)
//  return  fetch(url,{
//     method:'get',
//     headers: {
//       "Content-Type": " application/json",
//       // Authorization: `Bearer ${token}`,
//     },
//   })
//   // .then((el)=>el.json().then((e)=>{console.log(e)}))

//   }
//////////////////////////////////////////////////////////////////////////////////////////

// export const deletepost =(id)=>{
//   return fetch(`${url}/${id}`,{
//   method:"delete",
//   headers:{
//     // "Content-Type": " application/json",
//     // Authorization: `Bearer ${token}`,
//   }


// })

// }
//////////////////////////////////////////////////////////////////////////////////////////////////////

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








//  return fetch('http://localhost:8000/registration/signup',{
//     method:"post",
//     headers:{
//           "Content-Type": " application/json",
//     "Authorization": `Bearer ${token}`,
//     },
//     body:JSON.stringify(body)
    
//   })
  
}

export const Loggin= async (body) => {
  try {
    return  await fetch(
      logginEmployee,
    
      {
        method: "post",
        headers: {
          "Content-Type": " application/json",
          Authorization: `Bearer ${token.token}`,
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
      
    }

  }