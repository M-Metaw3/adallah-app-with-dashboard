import React, { useEffect, useState } from 'react'
import postaction from '../../action/postaction';
import { useDispatch, useSelector } from 'react-redux';
import UpdateLocation from './UpdateLocation';
import dashboard from '../../action/postaction'

function Location(props) {
  const dispatch = useDispatch()
  const { allLocations } = useSelector((state) => state.Location)
  useEffect(() => {
      dispatch(postaction.getLocaions(props.category))
  }, [dispatch]);

  const [show, setShow] = useState(false); 
  const [updateLocation, setUpdateLocation] = useState({ id: '', category: '', name: '',locations:{coordinates:[]}, details: '' })   
  const modalShow = (el) => {
    setShow(true);
    setUpdateLocation({  id: el.id,category: el.category, name: el.name, locations:{coordinates:el.locations.coordinates} , details: el.details })
  }
  const handelerDelete = (id) => {
    dispatch(dashboard.deleteLocation(id))
}

  return (
    <>
    <div className='p-4 '>
        <span className=''>Total : {allLocations?.length}</span>
    </div>
      
    {allLocations?
<div className='p-4 '>
      {allLocations.map((el)=>(
            <div key={el.id} className="card position-static my-2">

        <div  className="card-body d-flex row align-items-center justify-content-center">
            <div className='col-12 col-lg-6  d-flex row justify-content-center align-items-center'>
            <div className='col-3 d-flex justify-content-center'>
            {/* <img src={el.image} alt="img" className='mx-2 rounded-circle' width={70} height={70} /> */}
            <img src={require('../../assets/images/logoo.png')} alt="img" className='mx-2 rounded-circle' width={70} height={70} />
              </div>
              <p className='col-9'>
              {el.name}
            </p>
            </div>

            <span className='col-8 col-lg-2 border-end border-start text-center my-2 my-lg-0'>{el.category}</span>
            <div className='col-12 col-lg-4 d-flex justify-content-evenly'>
            <button  onClick={() => modalShow(el)} className='btn border-0 fs-5' >Update</button>
            <button onClick={()=>handelerDelete(el._id)} className='btn border-0 fs-5'>Delete</button>
            {/* <button onClick={()=>handelerRejected(el._id)} className='btn border-0 fs-5'>Reject</button> */}
            </div>
          </div>
          </div>
          ))}</div>: <h1>loading .....</h1>}

  <div>
        <UpdateLocation show={show} setShow={setShow} updateLocation={updateLocation} setUpdateLocation={setUpdateLocation}/>
  </div>
          
    </>
  )
}

export default Location
