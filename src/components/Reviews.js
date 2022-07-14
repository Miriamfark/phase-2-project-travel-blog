import React from 'react'

const  Reviews = ({ reviews }) => {

  let reviewsList;

  if (reviews) {
    reviewsList = reviews.map((review)=>{
    return <li>{review}</li>
  })
}

  console.log("reviews being displayed", reviewsList)

  return (
    <div>
        <h4>Reviews</h4>
        <ul>
          {reviewsList}
        </ul>
        
    </div>
  )
}

export default Reviews