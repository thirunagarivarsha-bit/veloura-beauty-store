function ReviewCard({review}){

return(

<div className="review-box">

<h3>{review.name}</h3>

<p>{review.rating}</p>

<p>{review.text}</p>

</div>

)

}

export default ReviewCard