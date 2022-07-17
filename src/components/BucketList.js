import React from 'react'

const BucketList = ({ bucketList }) => {

    console.log(bucketList)

    const bucketListDisplay = bucketList.map((entry)=>{
        return <li key={entry.id}>{entry.city} | {entry.country}</li>
    })

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