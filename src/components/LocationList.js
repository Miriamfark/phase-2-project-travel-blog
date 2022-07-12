import React, { useEffect } from 'react'
import LocationCard from './LocationCard'
import { Link, Routes, Route  } from "react-router-dom";

const LocationList = ({ location, setLocation, locations, setLocations, passport, setPassport }) => {

    useEffect(() => {
        fetch("http://localhost:3001/locations")
            .then(r => r.json())
            .then(data => setLocations(data))
    }, [])

    let locationCards

    if (locations){
    locationCards = locations.map((location)=>{
       return (
       <li key={location.id}>
           <Link to={`/locations/${location.id}`}>{location.city}</Link>
           <Routes>
            <Route path={`:${location.id}`} element={<LocationCard  
        passport={passport}
        key={location.id}
        id={location.id}
        city={location.city}
        country={location.country}
        location={location}
        setPassport={setPassport}
        food={location.food}
        landmark={location.landmark}
    />} />
        </Routes>
        
    </li>
       )
    })
}

  return (
    <div className='box'>
        <h1>Location List</h1>
        <ul>{locationCards}</ul>
        <Link to={"/locations/new"}>Add A New Travel Location</ Link>
    </div>
  )
}

export default LocationList