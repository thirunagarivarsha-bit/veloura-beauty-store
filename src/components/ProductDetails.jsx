import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { products }
from "../services/productsData"

function ProductDetails(){

const { id } = useParams()

const navigate = useNavigate()

const product = products.find(
item => item.id === Number(id)
)

if(!product){

return(
<h1>
Product Not Found
</h1>
)

}

const [quantity,setQuantity]=useState(1)

return(

<div className="products-page">

<img

src={product.image}

alt={product.name}

style={{
width:"300px",
borderRadius:"20px"
}}

/>

<h1>

{product.name}

</h1>

<h2>

₹{product.price}

</h2>

<h3>

Quantity

</h3>

<div

style={{

display:"flex",

justifyContent:"center",

alignItems:"center",

gap:"20px",

marginBottom:"20px"

}}

>

<button

onClick={()=>{

if(quantity>1){

setQuantity(quantity-1)

}

}}

>

-

</button>

<h2>

{quantity}

</h2>

<button

onClick={()=>setQuantity(quantity+1)}

>

+

</button>

</div>

<h2>

Total Price : ₹{product.price*quantity}

</h2>

<h3>

{product.discount}

</h3>

<h3>

{product.rating}

</h3>

<h3>

{product.reviews} Customer Reviews

</h3>

<h3>

Skin Type

</h3>

<p>

{product.skin}

</p>

<h3>

Ingredients

</h3>

<p>

{product.ingredients}

</p>

<h3>

Description

</h3>

<p>

{product.description}

</p>

<h2>

Customer Reviews

</h2>

<div className="review-box">

<h3>

Priya ⭐⭐⭐⭐⭐

</h3>

<p>

My skin became brighter within two weeks.
Lightweight and refreshing.

</p>

</div>

<br/>

<div className="review-box">

<h3>

Anjali ⭐⭐⭐⭐

</h3>

<p>

Absorbs quickly and gives a natural glow.
Perfect for daily use.

</p>

</div>

<br/>

<div className="review-box">

<h3>

Keerthana ⭐⭐⭐⭐⭐

</h3>

<p>

Excellent quality.
Worth every rupee and highly recommended.

</p>

</div>

<br/>

<h2>

Product Information

</h2>

<p>

✅ In Stock

</p>

<p>

🚚 Free Delivery Above ₹999

</p>

<p>

💳 Cash On Delivery Available

</p>

<p>

🔒 100% Genuine Veloura Products

</p>

<p>

↩ Easy Returns Available

</p>

<br/>

<button

onClick={()=>navigate("/checkout")}

>

Buy Now 🛍️

</button>

</div>

)

}

export default ProductDetails