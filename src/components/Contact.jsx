import { useNavigate } from "react-router-dom"

function Contact(){

const navigate = useNavigate()

return(

<div className="contact-page">

<h1>
Contact Veloura
</h1>

<div className="contact-container">

<div className="contact-card">

<h2>
Store Details
</h2>

<p>
Veloura Luxury Beauty
</p>

<p>
Hyderabad, Telangana
</p>

<p>
+91 8179055628
</p>

<p>
support@veloura.com
</p>

</div>

<div className="contact-card">

<h2>
Customer Support
</h2>

<p>Track Orders</p>
<p>Refund Support</p>
<p>Beauty Consultation</p>

<button
onClick={()=>navigate("/chat")}
>
Chat With Us
</button>

</div>

</div>

<div className="map-section">

<h2>
Visit Us
</h2>

<iframe
src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
width="90%"
height="350"
style={{
border:"0",
borderRadius:"20px"
}}
loading="lazy"
/>

</div>

</div>

)

}

export default Contact