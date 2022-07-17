import React from 'react'

const  Reviews = ({ reviews, newReview, }) => {

  console.log("hello from review component", newReview)

  const updatedReviewList = [
    ...reviews, newReview
  ]

  let mappedReviewsList

  if (updatedReviewList) {
    mappedReviewsList = updatedReviewList.map((review)=>{
    return <li>{review}</li>
  })
}

  // console.log("reviews being displayed", reviewsList)

  return (
    <div>
        <h4>Reviews</h4>
        <ul>
          {mappedReviewsList}
        </ul>
        
    </div>
  )
}

export default Reviews