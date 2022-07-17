import React from 'react'
import { Link } from 'react-router-dom'

const BucketList = ({ bucketList }) => {

    console.log(bucketList)

    const bucketListDisplay = bucketList.map((entry)=>{
        return <li key={entry.id}>{entry.city} | {entry.country}</li>
    })

    if (bucketListDisplay.length === 0) {
      return(
        <div className="box">
          <h3>Your passport is currently empty.</h3>
          <Link to="/locations/*" className="button">Click here to add a destination to your bucket list</Link>
        </div>
      )
    }

  return (
    <div class="box">
       <h2>My Travel Bucket List</h2>
       <ul>
            {bucketListDisplay}
       </ul>
       <img className="image" src="https://media.istockphoto.com/photos/inspirational-and-conceptual-picture-id1006968168?k=20&m=1006968168&s=612x612&w=0&h=61-iouzRzSBYbA3QzrZNBFvLvzMjvekJ5wnH-HEuB9I="/>
    </div>
  )
}

export default BucketList