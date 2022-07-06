import React from 'react'

const LocationCard = ({ city, country  }) => {
  return (
    <div>
        <h3>{city} | {country}</h3>
    </div>
  )
}

export default LocationCard