import React from 'react'
import { useParams } from 'react-router-dom';

function Lawyer() {
    const { Lawyer } = useParams();
    console.log(Lawyer)
    return (
    <>
      {Lawyer}
    </>
  )
}

export default Lawyer
