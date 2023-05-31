import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import postaction from '../../action/postaction';
import dashboard from '../../action/postaction'
import FileBase from "react-file-base64"


function AllEmployees() {
    const dispatch = useDispatch()
    const { allemp } = useSelector((state) => state.post)
    useEffect(() => {
        dispatch(postaction.getAllemp())
    }, [dispatch]);

    const [showUpdate, setshowUpdate] = useState(false)
    const [updateEmp, setupdateEmp] = useState({ image: '', name: '', position: '', email: '', id: '' })
    const handelerUpdate = (el) => {
        console.log("handelerUpdate");
        setshowUpdate(true)
        setupdateEmp({ image: el.image, name: el.name, position: el.position, email: el.email, id: el._id })
        console.log(el);
    }
    const handelerDelete = (id) => {
        dispatch(dashboard.deleteemploye(id))
    }
    const handelerSusbened = (id) => {
        console.log("handelerSusbened");
        dispatch(dashboard.susbenedEmployee(id))
    }

    const handelerubdatedetails = (id) => {


        dispatch(postaction.apdateemploye(id, updateEmp))
        setshowUpdate(false);
    }
    /////////////////////////////////////////////////////////////
    const handelerCancel = () => {
        setshowUpdate(false)

    }
    return (
        <>
        <div className=' py-4'>
            <span className=''>Total : {allemp?.length}</span>
        </div>
        
             <div>
             {showUpdate ?
                    <div className='row d-flex justify-content-center mx-0'>
                        <img  src={updateEmp.image} className="mb-3 col-4"/>
                    <div className="mb-3 col-9">
                      <input className="form-control" value={updateEmp.name} onChange={(e) => setupdateEmp({ ...updateEmp, name: e.target.value })} name={updateEmp.name} type="text" />
                    </div>
                    <div className="mb-3 col-9">
                        <input className="form-control" name={updateEmp.name} value={updateEmp.email} onChange={(e) => setupdateEmp({ ...updateEmp, email: e.target.value })} type="email" />
                    </div>
                    <div className="mb-3 col-9">
                            <select className="form-select" required onChange={(event) => setupdateEmp({ ...updateEmp, position: event.target.value })} name="Category" id="cars">
                                <option value={updateEmp.position} > {updateEmp.position}</option>
                                <option value="Admin">Admin</option>
                                <option value="customerService"> customer Service</option>
                                <option value="markting">markting</option>
                            </select>
                        </div>
                        <div className="mb-3 col-9 ">
                            <div className="form-control">
                            <FileBase
                            type="file"
                            onDone={({ base64 }) => setupdateEmp({ ...updateEmp, image: base64 })}
                            value={updateEmp.image}
                        />
                            </div>
                       
                        </div>
                        <div className="mb-3 col-9 row justify-content-center ">

                        <button className="btn login_btn col-4 col-lg-3 mx-3" onClick={() => handelerubdatedetails(updateEmp.id)}> confirm </button>
                        <button className="btn login_btn col-4 col-lg-3 mx-3" onClick={handelerCancel}> cancel </button>
                        </div>

                    </div> : ""}
             </div>

            
            {allemp ?
                <div >
                    {allemp.map((el) => (
                        <div key={el.id} className="card position-static my-2">

                            <div className="card-body d-flex row align-items-center justify-content-center">
                                <div className='col-12 col-lg-6  d-flex row'>
                                    <div className='col-3 d-flex justify-content-center'>
                                        <img src={el.image} alt="img" className='mx-2 rounded-circle' width={70} height={70} />
                                    </div>
                                    <div className='col-9'>
                                        <p>{el.name}</p>
                                        <p className='font-opacity-50'>{el.email}</p>
                                    </div>
                                </div>

                                <span className='col-8 col-lg-2 border-end border-start text-center my-2 my-lg-0'>{el.position}</span>

                                <div className='col-12 col-lg-4 d-flex justify-content-evenly'>
                                    <button onClick={() => handelerUpdate(el)} className='btn border-0 fs-5' >Update</button>
                                    <button onClick={() => handelerSusbened(el._id)} className='btn border-0 fs-5' >Susbend</button>
                                    <button onClick={() => handelerDelete(el._id)} className='btn border-0 fs-5'>Delete</button>
                                </div>
                            </div>
                        </div>

                    ))}</div> : <h1>loading .....</h1>}


        </>
    )
}

export default AllEmployees
