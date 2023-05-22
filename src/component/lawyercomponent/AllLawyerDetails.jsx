import React, { useEffect } from 'react';
import postaction from '../../action/postaction';
import { useDispatch, useSelector } from 'react-redux';

const AllLawyerDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(postaction.getAllLawyers())
  }, [dispatch]);
  const {allLawyers} = useSelector((state)=>state.Lawyer)
    return (
        <>
                    {allLawyers?
<div className='p-4'>
          {allLawyers.map((el)=>(
                <div key={el.id} className="card my-2">

            <div  className="card-body d-flex row align-items-center justify-content-center">
                <div className='col-12 col-lg-6  d-flex row'>
                <div className='col-3 d-flex justify-content-center'>
                  <img src={el.image} alt="img" className='mx-2 rounded-circle' width={70} height={70} />
                  </div>
                  <div className='col-9'>
                  <p>{el.name}</p>
                  <p className=' opacity-50'>{el.email}</p>
                </div>
                </div>

                <span className='col-8 col-lg-2 border-end border-start text-center'>{el.position}</span>
                
                {/* <div className='col-12 col-lg-4 d-flex justify-content-evenly'>
                <button onClick={() => handelerUpdate(el)} className='btn border-0 fs-5' >Update</button>
                <button onClick={() =>handelerSusbened(el._id)} className='btn border-0 fs-5' >Susbend</button>
                <button onClick={()=>handelerDelete(el._id)} className='btn border-0 fs-5'>Delete</button>
                </div> */}
              </div>
              </div>
              ))}</div>: <h1>loading .....</h1>}
        </>
    );
}

export default AllLawyerDetails;
