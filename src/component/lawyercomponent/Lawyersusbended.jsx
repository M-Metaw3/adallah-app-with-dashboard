import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import postaction from '../../action/postaction';

function Lawyersusbended() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(postaction.getSusbendedLawyers())
    }, [dispatch]);
    const {allLawyers} = useSelector((state)=>state.Lawyer);


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
              <p>{el.name}</p>
              <p className='font-opacity-50'>{el.phone}</p>
            </div>
            </div>

            <span className='col-8 col-lg-2 border-end border-start text-center my-2 my-lg-0'>{el.nationality}</span>
            
            <div className='col-12 col-lg-4 d-flex justify-content-evenly'>
            {/* <button onClick={() => handelerUpdate(el)} className='btn border-0 fs-5' >Update</button> */}
            {/* <button onClick={() =>handelerSusbened(el._id)} className='btn border-0 fs-5' >Susbend</button> */}
            {/* <button onClick={()=>handelerDelete(el._id)} className='btn border-0 fs-5'>Delete</button> */}
            </div>
          </div>
          </div>
          ))}</div>: <h1>loading .....</h1>}
    </>
  )
}

export default Lawyersusbended
