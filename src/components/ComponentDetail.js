import React from 'react'
import { useParams } from 'react-router-dom'
import LocationCard from './LocationCard';

const ComponentDetail = ({ locations, passport, setPassport, bucketList, setBucketList }) => {

    let { id } = useParams();
    console.log(id)

    let selectedLocations;

    if (locations) {

    selectedLocations = locations.map((location)=>{

        if (location.id == id) {
            return( <LocationCard  
                    passport={passport}
                    key={location.id}
                    id={location.id}
                    city={location.city}
                    country={location.country}
                    location={location}
                    setPassport={setPassport}
                    food={location.food}
                    landmark={location.landmark}
                    bucketList={bucketList}
                    setBucketList={setBucketList}
                    reviews={location.comments}
                 />
            )
        }
        
        })
    }
    

  return (
    <div className="box">
        {selectedLocations}
    </div>
    )
  }

export default ComponentDetail