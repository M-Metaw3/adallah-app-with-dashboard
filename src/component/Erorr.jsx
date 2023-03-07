import React from 'react';

const Error = () => {
    //in the oldDate, pass the string as params to the date constructor
let oldDate = new Date() 
//construct this one without a parameter and it will use the system time
let systemDate = new Date().getHours()
const a = 19
console.log(


              oldDate.setHours(systemDate)    == oldDate.setHours(a)

);

 
    // const a = ""

    return (
        <div>
            <h1>error</h1>
        </div>
    );
}

export default Error;
