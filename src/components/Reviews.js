import React from 'react'

const  Reviews = ({ reviews, newReview, }) => {

  const updatedReviewList = [
    ...reviews, newReview
  ]

  let mappedReviewsList

  if (updatedReviewList) {
    mappedReviewsList = updatedReviewList.map((review)=>{
    return <li key={review.index}>{review}</li>
  })
}

console.log("reviews", reviews)
console.log("newReview", newReview)
console.log("updatedReviewList", updatedReviewList)
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