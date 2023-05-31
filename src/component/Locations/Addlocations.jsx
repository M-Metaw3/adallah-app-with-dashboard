import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import dashboard from '../../action/postaction'
import SearchSection from '../Search-Section/SearchSection';
import axios from 'axios';
import { addPlacesApi } from '../../api/api';

const Addlocations = () => {

    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [details, setDetails] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(addPlacesApi, {
            category,
            name,
            locations: {
              coordinates: [parseFloat(longitude), parseFloat(latitude)],
            },
            details,
          });
          console.log(response.data);
          // Do something with the response, e.g. show a success message
        } catch (error) {
          console.error(error);
          // Do something with the error, e.g. show an error message
        }
      };

    return (
        <>
            <div className='py-5'>

                <form  className='row d-flex justify-content-center m-0'>
                    <div className="mb-3 col-10 col-lg-7">
                        <input  className="form-control" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                    </div>
                    <div className="mb-3 col-10 col-lg-7">
                        <input className="form-control"  id="details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder='Details' />
                    </div>
                    <div className="mb-3 col-10 col-lg-7">
                        <input className="form-control" type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} placeholder='Longitude' />
                    </div>
                    <div className="mb-3 col-10 col-lg-7">
                        <input className="form-control" type="text" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} placeholder='Latitude' />
                    </div>
                    <div className="mb-3 col-10 col-lg-7">

                        <select className='form-select' id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
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
                    <div className="mb-3 col-10 col-lg-7">
                        <button className="btn login_btn my-3 w-100" onClick={handleSubmit}> Add Court</button>
                    </div>

                </form>

            </div>
        </>
    );
}

export default Addlocations;
