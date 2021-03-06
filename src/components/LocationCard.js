import React, { useState } from 'react'
import Reviews from './Reviews'


const LocationCard = ({ food, landmark, city, country, setPassport, passport, location, bucketList, setBucketList, reviews }) => {

  const [newReview, setNewReview] = useState([])

  
  function handleClick(location) {
        console.log("add this location to my passport", location)
        const updatedPassportList = [... passport, location]
        setPassport(updatedPassportList) 
        {alert(`${city}, ${country} has been added to your passport`)}
    }

    function handleBucketClick(location) {
        console.log("add this location to my bucket list", location)
        const updatedBucketList = [...bucketList, location]
        setBucketList(updatedBucketList)
        {alert(`${city}, ${country} has been added to your bucket list`)}
    }

    function handleReviewChange(e) {
      setNewReview(e.target.value)
    }

    function handleSubmit(e) {
       e.preventDefault()
      
      const reviewData = [
        ...location.comments, newReview
      ]

      // console.log(location)

      fetch(`http://localhost:3000/locations/${location.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json", 
        },
        body: JSON.stringify({comments: reviewData})
      })
      .then((r)=>r.json())
      .then((data)=>{
        const lastReview = data.comments[data.comments.length -1]
        setNewReview(lastReview)
      })
      
      
      {
        const form= document.getElementById('review-form')
        form.reset()
    }
    }
    // console.log("after patched", newReview)

  return (
    <div class="description">
        <h2>{city} | {country}</h2>
        <p>{city} is located in {country}. It is known for its delicious {food}. Make sure to visit the {landmark}!</p>
        <Reviews reviews={reviews} newReview={newReview} />
        <button className="button" onClick={()=>handleClick(location)}>I visited here! Add to my passport</button>
        <button className="button" onClick={()=>handleBucketClick(location)}>I want to visit here! Add to my bucket list</button>
        <form id="review-form" onSubmit={handleSubmit}>
          <label>Add Review</label>
          <input onChange={handleReviewChange} type="text"></input>
          <input type="submit"></input> 
        </form>
    </div>
  )
}

export default LocationCard