import React, { useState } from 'react'

const NewLocation = () => {

    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [food, setFood] = useState("")
    const [landmark, setLandmark] = useState("")

    function handleCityChange(e) {
        setCity(e.target.value)
        console.log("city:", city)
    }

    function handleCountryChange(e) {
        setCountry(e.target.value)
        console.log("country:", country)
    }

    function handleFoodChange(e) {
        setFood(e.target.value)
        console.log("food:", food)
    }

    function handleLandmarkChange(e) {
        setLandmark(e.target.value)
        console.log("landmark:", landmark)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newLocationData = {
            city: city,
            country: country,
            food: food,
            landmark: landmark
          };
        console.log(newLocationData)

        fetch("http://localhost:3001/locations", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(newLocationData),
        })
            .then((r) => r.json())
            .then((newItem) => console.log(newItem));
    }

  return (
      <div class="box">
      <h4>New Location</h4>
    <form onSubmit={handleSubmit}>
        <label>City</label>
        <input onChange={handleCityChange} type="text" placeholder="type city here..."></input>
        <label>Country</label>
        <input onChange={handleCountryChange} type="text" placeholder="type country here..."></input>
        <label>Iconic Food</label>
        <input onChange={handleFoodChange} type="text" placeholder="type food here..."></input>
        <label>Landmark</label>
        <input onChange={handleLandmarkChange} type="text" placeholder="type landmark here..."></input>
        <input type="submit"></input> 
    </form>
    </div>
  )
}

export default NewLocation