import React from 'react';
import FileBase from "react-file-base64"
import { useEffect,useState  } from "react";
import SearchSection from './Search-Section/SearchSection';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AddAdvertising = () => {
const [registration, setregistration] = useState({image:'',text:''});
// const handelerAdvrtiser=(e)=>{

//     let a = new FileReader()
//     console.log(a.readAsDataURL(e[0]));
// }

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable autoplay
    autoplaySpeed: 2000 // set autoplay speed to 4 seconds
  };


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
{/* <input type="text"onChange={ (e)=>setregistration({...registration,text:e.target.value})} name="" id="" /> */}


<div className=' container-fluid p-5'>
<Slider {...settings}>
      <div>
      <img  height={100} src={require('../assets/images/logoo.png')} alt='' />
      </div>
      <div>
      <img  height={100} src={require('../assets/images/logo.png')} alt='' />
      </div>
      <div>
      <img  height={100} src={require('../assets/images/logoo.png')} alt='' />
      </div>
      <div>
      <img  height={100} src={require('../assets/images/logo.png')} alt='' />
      </div>
  </Slider>
</div>
        </>
    );
}

export default AddAdvertising;
