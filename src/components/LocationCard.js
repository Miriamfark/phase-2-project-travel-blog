import React from 'react'


const LocationCard = ({ food, landmark, city, country, setPassport, passport, location  }) => {

    function handleClick(location) {
        console.log("add this location to my passport", location)
        const updatedPassportList = [... passport, location]
        setPassport(updatedPassportList) 
        {alert(`${city}, ${country} has been added to your passport`)}
    }

  return (
    <div class="description">
        <p>{city} is located in {country}. It is known for its delicious {food}. Make sure to visit the {landmark}!</p>
        <button className="button" onClick={()=>handleClick(location)}>I visited here!</button>
        <button className="button">Add to my bucket list</button>
    </div>
  )
}

export default LocationCard