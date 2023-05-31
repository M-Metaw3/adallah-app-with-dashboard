import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import postaction from '../../action/postaction';

function AllCitizen() {
    const dispatch = useDispatch()
    const { AllCitizen } = useSelector((state) => state.Citizen)
    useEffect(() => {
        dispatch(postaction.getAllCitizen())
    }, [dispatch]);

  return (
    <>
     <div className=' py-4'>
            <span className=''>Total : {AllCitizen?.length}</span>

            {/* AllCitizen  */}

        </div>
    </>
  )
}

export default AllCitizen
