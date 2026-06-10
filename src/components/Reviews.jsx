function Reviews(){

const reviews=[

{
name:"Hasini",
rating:"⭐⭐⭐⭐⭐",
review:"Glow Serum reduced acne marks within weeks."
},

{
name:"Laasya",
rating:"⭐⭐⭐⭐☆",
review:"Excellent skincare combo for tanning."
},

{
name:"Charitha",
rating:"⭐⭐⭐⭐⭐",
review:"Hair serum made my hair smooth and shiny."
}

]

return(

<div className="reviews-page">

<h1>
Customer Transformations ✨
</h1>

<div className="reviews-container">

{

reviews.map((item,index)=>(

<div className="review-box" key={index}>

<h2>{item.name}</h2>

<p>{item.rating}</p>

<p>{item.review}</p>

</div>

))

}

</div>

</div>

)

}

export default Reviews