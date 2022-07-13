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
    </div>
  )
}

export default BucketList