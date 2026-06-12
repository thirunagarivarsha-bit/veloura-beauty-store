import { useNavigate } from "react-router-dom"

function OrderSuccess(){

const navigate=useNavigate()

return(

<div
style={{

minHeight:"80vh",

display:"flex",

justifyContent:"center",

alignItems:"center"

}}
>

<div

style={{

background:"#22c55e",

padding:"50px",

borderRadius:"25px",

textAlign:"center",

color:"white",

maxWidth:"600px"

}}

>

<h1>

🎉 Order Placed Successfully!

</h1>

<br/>

<h2>

Thank You For Shopping With Veloura 💄

</h2>

<br/>

<p>

Your order has been confirmed.

</p>

<p>

Our beauty team is preparing your package.

</p>

<p>

🚚 Estimated Delivery: 2-4 Business Days

</p>

<p>

📦 Tracking details will be shared soon.

</p>

<p>

💖 Stay Beautiful, Stay Confident!

</p>

<br/>

<button

onClick={()=>navigate("/")}

>

Continue Shopping

</button>

</div>

</div>

)

}

export default OrderSuccess