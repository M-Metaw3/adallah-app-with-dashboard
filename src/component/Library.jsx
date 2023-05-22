import React from 'react';
import FileBase from "react-file-base64"
import { useEffect,useState  } from "react";
import SearchSection from './Search-Section/SearchSection';

const Library = () => {

    const [pdf,setpdf]=useState('')


 
    return (
        <>
                <SearchSection title={"Library"} setSearchValue={""}/>
            <h1>uploade pdf</h1>
                  <FileBase
type="file"
onDone={({base64})=>setpdf(base64)}
// value={registration.image} 


/>
        </>
    );
}

export default Library;
