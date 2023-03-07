import React from 'react';
import { useEffect,useState  } from "react";
import { useDispatch ,useSelector } from 'react-redux';
import dashboard from '../action/postaction'
const Addlocations = () => {

    
    
    const dispatch = useDispatch()
    const arr =[]
    const [places , setPlaces ]= useState({name:'',category:'',details:'',lat:'',lang:''})

const submitHandeler =async () => {

    console.log(places);
  
 dispatch( dashboard.locationAction(places))
 setPlaces({name:'',category:'',details:'',lat:'',lang:''})

  
}
 




    return (
        <div style={{width:"100%",height:"100vh",margin:"15px"}}>
          <form action="" style={{display:"flex" ,flexDirection:"column", border:"1px solid red" ,width:"100%",padding:"20px"}}>
            <label htmlFor="name">name</label>
            <input value={places.name} onChange={(e)=>setPlaces({...places,name:e.target.value})} id='name' type="text" name='name'/>
            <label  htmlFor="details">details</label>
            <input value={places.details} onChange={(e)=>setPlaces({...places,details:e.target.value})} id='details' name='details' type="text" />
            <label htmlFor="lang">lang</label>
            <input  value={places.lang} onChange={(e)=>setPlaces({...places,lang:e.target.value})} id='lang' name='lang' type="text" />
            <label htmlFor="lat">lat</label>

            <input value={places.lat} onChange={(e)=>setPlaces({...places,lat:e.target.value})} id='lat' name='lat' type="text" />

            
        

            <div className="select_cat">
                            <label htmlFor="position"> الاقسام:</label>
                            <select value={places.category} required onChange={(e)=>setPlaces({...places,category:e.target.value})}  name="Category" id="cars">
                            <option >اختر القسم</option>
                                <option value="محاكم">محاكم</option>
                                <option value="اقسام"> اقسام </option>
                                <option value="نيابات">نيابات</option>
                                <option value="غرف تجارية">غرف تجارية</option>
                                <option value="اشهر عقارية">اشهر عقارية</option>
                                <option value="سجلات تجارية">سجلات تجارية</option>
                                <option value="هيئات استثمار">هيئات استثمار</option>
                                <option value="مأموريات ضرائب">مأموريات ضرائب   </option>


                            </select>
                        </div>
          </form>
          <button onClick={submitHandeler}> Add Court</button>
        </div>
    );
}

export default Addlocations;
