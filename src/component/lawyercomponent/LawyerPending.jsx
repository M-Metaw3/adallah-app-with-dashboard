import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import postaction from '../../action/postaction';
import dashboard from '../../action/postaction'
import { NavLink } from 'react-router-dom';

const LawyerPending = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postaction.getNotVerifiedLawyer())
    }, [dispatch]);
    const {allLawyers} = useSelector((state)=>state.Lawyer);

    const handelerAccepted = (id) => {
        dispatch(dashboard.acceptLawyer(id))
    }
    const handelerRejected = (id) => {
        console.log("handelerRejected");
        dispatch(dashboard.rejectLawyer(id))
        dispatch(dashboard.deleteLawyer(id))
    }

    
    return (
        <>
    <div className='px-4 '>
        <span className=''>Total : {allLawyers?.length}</span>
    </div>
                {allLawyers?
<div className='p-4 '>
      {allLawyers.map((el)=>(
            <div key={el.id} className="card position-static my-2">

        <div  className="card-body d-flex row align-items-center justify-content-center">
            <div className='col-12 col-lg-6  d-flex row'>
            <div className='col-3 d-flex justify-content-center'>
            {/* <img src={el.image} alt="img" className='mx-2 rounded-circle' width={70} height={70} /> */}
            <img src={require('../../assets/images/logoo.png')} alt="img" className='mx-2 rounded-circle' width={70} height={70} />
              </div>
              <div className='col-9'>
                <NavLink className={`btn p-0 m-0 border-0 `} to={`/Home/lowyerDetails/${el.name}`}>
                    <p>{el.name}</p>
                </NavLink>
              <p className='font-opacity-50'>{el.id}</p>
            </div>
            </div>

            <span className='col-8 col-lg-2 border-end border-start text-center my-2 my-lg-0'>{el.nationality}</span>
            <div className='col-12 col-lg-4 d-flex justify-content-evenly'>
            {/* <button onClick={() => handelerUpdate(el)} className='btn border-0 fs-5' >Update</button> */}
            <button onClick={() =>handelerAccepted(el._id)} className='btn border-0 fs-5' >Accept</button>
            <button onClick={()=>handelerRejected(el._id)} className='btn border-0 fs-5'>Reject</button>
            </div>
          </div>
          </div>
          ))}</div>: <h1>loading .....</h1>}
    </>
    );
}

export default LawyerPending;
