import React from 'react';
import FileBase from "react-file-base64"
import { useEffect,useState  } from "react";

const Library = () => {

    const [pdf,setpdf]=useState('')


 
    return (
        <div>
            <h1>uploade pdf</h1>
                  <FileBase
type="file"
onDone={({base64})=>setpdf(base64)}
// value={registration.image} 


/>
        </div>
    );
}

export default Library;
