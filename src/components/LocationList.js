import React from 'react'
import { Link } from "react-router-dom";

const LocationList = ({ locations }) => {

    let locationCards

    if (locations){
    locationCards = locations.map((location)=>{
       return (
       <li key={location.id}>
           <Link to={`/locations-detail/${location.id}`}>{location.city}</Link>
          
        
    </li>
       )
    })
}

  return (
    <div className='box'>
        <h1>Location List</h1>
        <ul>{locationCards}</ul>
        <Link className="button" to={"/locations/new"}>Add A New Travel Location</ Link>
    </div>
  )
}

export default LocationList