import React from 'react'
import "./searchSection.css"
function SearchSection(props) {
  return (
    <>
    <div className=' d-flex justify-content-between p-4'>
    <h5 className=' col-6'>{props.title}</h5>
    <div className="form-group search col-6 col-md-3 ">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="Search" className="form-control border-0 " onChange={(e)=>props.setSearchValue(e.target.value)} placeholder="Search"/>
  </div>
         </div>
          
    </>
  )
}

export default SearchSection
