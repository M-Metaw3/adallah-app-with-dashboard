import React from 'react';
import FileBase from "react-file-base64"
import { useEffect,useState  } from "react";
import SearchSection from './Search-Section/SearchSection';

const AddAdvertising = () => {
const [registration, setregistration] = useState({image:'',text:''});
// const handelerAdvrtiser=(e)=>{

//     let a = new FileReader()
//     console.log(a.readAsDataURL(e[0]));
// }



console.log(registration.image);
    return (
        <>
            <SearchSection title={"Advertisements"} setSearchValue={""}/>
   
            <div >

                <img width={300} src={registration.image} alt="" />
                <h1>{registration.text}</h1>
                {/* <input  onChange={(e)=>{handelerAdvrtiser(e.target.value)}} type="file" /> */}
            </div>
          <FileBase
type="file"
onDone={({base64})=>setregistration({...registration,image:base64})}
value={registration.image} 


/>
<input type="text"onChange={ (e)=>setregistration({...registration,text:e.target.value})} name="" id="" />

        </>
    );
}

export default AddAdvertising;
