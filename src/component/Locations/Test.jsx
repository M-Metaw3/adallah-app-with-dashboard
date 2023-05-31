import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:10000/adala/locations', {
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select a category</option>
        <option value="محاكم">محاكم</option>
        <option value="اقسام">اقسام</option>
        <option value="نيابات">نيابات</option>
        <option value="غرف تجارية">غرف تجارية</option>
        <option value="اشهر عقارية">اشهر عقارية</option>
        <option value="سجلات تجارية">سجلات تجارية</option>
        <option value="مأموريات ضرائب">مأموريات ضرائب</option>
        <option value="هيئات استثمار">هيئات استثمار</option>
      </select>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

     <label htmlFor="latitude">Latitude:</label>
      <input type="text" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />

      <label htmlFor="longitude">Longitude:</label>
      <input type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />

      <label htmlFor="details">Details:</label>
      <textarea id="details" value={details} onChange={(e) => setDetails(e.target.value)}></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Test
