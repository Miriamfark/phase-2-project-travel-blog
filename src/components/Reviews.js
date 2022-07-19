import React from 'react'

const  Reviews = ({ reviews, newReview }) => {

  let mappedReviewsList

  if (reviews) {
    mappedReviewsList = reviews.map((review)=>{
    return <li key={reviews.index}>{review}</li>
  })
}

console.log("reviews", reviews)
console.log("newReview", newReview)

console.log("mappedReviewsList", mappedReviewsList)

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