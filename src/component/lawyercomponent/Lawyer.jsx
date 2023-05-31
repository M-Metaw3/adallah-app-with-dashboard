import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Lawyer() {
    const { id } = useParams();
    console.log(id)
    const {allLawyers}= useSelector((state)=>state.Lawyer);
  const Lawyer=allLawyers.find((Lawyer)=>Lawyer.id===id);
  console.log(Lawyer)
    return (
    <>
      {Lawyer?.id}
    </>
  )
}

export default Lawyer
