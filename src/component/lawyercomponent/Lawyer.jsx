import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import postaction from '../../action/postaction';
import { Container } from 'react-bootstrap';

function Lawyer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postaction.getAllLawyers())
  }, [dispatch]);
  const { allLawyers } = useSelector((state) => state.Lawyer);
  // const [Lawyer, setLawyer] = useState(0);
  const Lawyer = allLawyers.find((Lawyer) => Lawyer.id === id);

  return (
    <>
    <Container className='py-5'>
    <p> {Lawyer?._id}</p>
      <p> {Lawyer?.name}</p>
      <p> {Lawyer?.nationality}</p>
      <p> {Lawyer?.phone}</p>
      <p> {Lawyer?.checked?"checked true":"checked false"}</p>
   
    </Container>
      
    </>
  )
}

export default Lawyer

