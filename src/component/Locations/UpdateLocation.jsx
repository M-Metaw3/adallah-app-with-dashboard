import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import postaction from '../../action/postaction';
import { useDispatch } from 'react-redux';

function UpdateLocation({setShow,show,updateLocation,setUpdateLocation}) {

    const modalClose = () => setShow(false);  

    const dispatch = useDispatch();
    const handelerUpdate = (id) => {

        dispatch(postaction.updateLocation(id, updateLocation))
    }
    return (
    <>
          
          <Modal centered show={show} onHide={modalClose}>  
          <Modal.Header closeButton>  
            <Modal.Title> 
                Update {updateLocation.name}
            </Modal.Title>  
          </Modal.Header>  
          
          <Modal.Body>  
            <form  className='row d-flex justify-content-center m-0'>
                <div className="col-12 form-group ">
                  <label className="px-2 opacity-75" htmlFor="name">Name</label>
                  <input  className="form-control" type="text" id="name" value={updateLocation.name} onChange={(e) => setUpdateLocation({ ...updateLocation, name: e.target.value })} name={updateLocation.name} placeholder='Name' />
                </div>

                <div className="col-12 form-group ">
                        <label className="px-2 opacity-75" htmlFor="details">Details</label>
                        <input className="form-control"  id="details" value={updateLocation.details} onChange={(e) =>setUpdateLocation({ ...updateLocation, details: e.target.value })} name={updateLocation.details}  placeholder='Details' />
                    </div>
                    <div className="col-12 form-group ">
                        <label className="px-2 opacity-75" htmlFor="longitude">Longitude</label>
                        <input className="form-control" type="text" id="longitude" value={updateLocation.locations.coordinates[0]} onChange={(e) =>setUpdateLocation({ ...updateLocation, longitude: e.target.value })} name={updateLocation.longitude}  placeholder='Longitude' />
                    </div>
                    <div className="col-12 form-group ">
                    <label className="px-2 opacity-75" htmlFor="latitude">Latitude</label>
                    <input className="form-control" type="text" id="latitude" value={updateLocation.locations.coordinates[1]} onChange={(e) =>setUpdateLocation({ ...updateLocation, latitude: e.target.value })} name={updateLocation.latitude} placeholder='Latitude' />
                    </div>
                    <div className="col-12 form-group ">
                    <label className="px-2 opacity-75" htmlFor="category">Category</label>
                        <select className='form-select' id="category" value={updateLocation.category} onChange={(e) =>setUpdateLocation({ ...updateLocation, category: e.target.value })} name={updateLocation.category} >
                            <option >اختر القسم</option>
                            <option value="محاكم">محاكم</option>
                            <option value="اقسام"> اقسام </option>
                            <option value="نيابات">نيابات</option>
                            <option value="غرف تجارية">غرف تجارية</option>
                            <option value="اشهر عقارية">اشهر عقارية</option>
                            <option value="سجلات تجارية">سجلات تجارية</option>
                            <option value="هيئات استثمار">هيئات استثمار</option>
                            <option value="مأموريات ضرائب">مأموريات ضرائب</option>
                        </select>
                    </div>
                    <div className="col-12 form-group ">
                        {/* <button className="btn login_btn my-3 w-100" onClick={handleSubmit}> Add Court</button> */}
                    </div>

                </form>  
          </Modal.Body>  
          
          <Modal.Footer>  
            <Button variant="secondary" onClick={modalClose}> Cancel</Button>  
            <Button  className=' login_btn' onClick={()=>handelerUpdate(updateLocation.id)}>Save changes</Button>

            {/* <div className="mb-3 col-10 col-lg-7">
                        <button className="btn login_btn my-3 w-100" onClick={'handleSubmit'}> Add Court</button>
                    </div>   */}
          </Modal.Footer>  
        </Modal>   
      
    </>
  )
}

export default UpdateLocation
