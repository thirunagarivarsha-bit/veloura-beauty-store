import { useNavigate } from "react-router-dom"

function ProductCard({

item,

cartHandler,

wishlistHandler

}){

const navigate=useNavigate()

return(

<div className="product-card">

<img
src={item.image}
alt={item.name}
/>

<h2>{item.name}</h2>

<p>₹{item.price}</p>

<p>{item.discount}</p>

<p>{item.rating}</p>

<p>{item.reviews} Reviews</p>

<p>{item.skin}</p>

<button
onClick={() => cartHandler(item)}
>
Add To Cart
</button>

<button
className="wish-btn"
onClick={()=>
wishlistHandler(item)
}
>
Wishlist ❤️
</button>

<button
onClick={()=>
navigate(`/products/${item.id}`)
}
>
View Details
</button>

</div>

)

}

export default ProductCard