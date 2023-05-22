import React, { useEffect } from 'react';
import postaction from '../../action/postaction';
import { useDispatch, useSelector } from 'react-redux';

const AllLawyerDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch( postaction.getAllLawyers())
  }, [dispatch]);
  const allLawyers = useSelector((state)=>state.Lawyer)
    return (
        <>
                    <div>
                      Aaaaaaaaaaaaa
                    </div>
        </>
    );
}

export default AllLawyerDetails;
