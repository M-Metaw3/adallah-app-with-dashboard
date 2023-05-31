import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import postaction from '../../action/postaction';
import AllLocations from './AllLocations';

function Courts() {

  return (
    <>
        <AllLocations category="محاكم"/>
    </>
  )
}

export default Courts
