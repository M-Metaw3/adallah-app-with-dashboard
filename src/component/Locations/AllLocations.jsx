import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import postaction from '../../action/postaction';
import Location from './Location';

function AllLocations() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(postaction.getAllLocaions())
  }, [dispatch]);
  return (
    <>
            <Location/>
      
    </>
  )
}

export default AllLocations
