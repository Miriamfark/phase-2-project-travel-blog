import React, { useState, useEffect } from 'react'
import LocationCard from './LocationCard'
import NewLocation from './NewLocation'
import { Link } from "react-router-dom";

const LocationList = () => {

    const [locations, setLocations] = useState([])
    const [isForm, setIsForm] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3001/locations")
            .then(r => r.json())
            .then(data => setLocations(data))
    }, [])

    let locationCards

    if (locations){
    locationCards = locations.map((location)=>{
       return <LocationCard  
        key={location.id}
        city={location.city}
        country={location.country} />
    })
}

    function handleClick() {
        setIsForm(!isForm)
        console.log("clicked")
    }

  return (
    <div>
        <h1>Location List</h1>
        <ul>{locationCards}</ul>
        <Link to={"/locations/new"} onClick={handleClick}>Add A New Travel Location</ Link>
        {isForm ? <NewLocation /> : null}
    </div>
  )
}

export default LocationList