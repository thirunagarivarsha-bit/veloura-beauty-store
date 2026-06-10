import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SupportButton(){

const [openChat,setOpenChat] = useState(false)

const navigate = useNavigate()

return(

<>

<div
className="support-btn"
onClick={()=>setOpenChat(!openChat)}
>

💬 Need Help?

</div>

{

openChat && (

<div className="chatbox">

<h3>
Veloura Support
</h3>

<p>
Hello Beautiful 💖
</p>

<p>
How can we help today?
</p>

<button
onClick={()=>navigate("/chat")}
>
Track Order
</button>

<button
onClick={()=>navigate("/chat")}
>
Refund Support
</button>

<button
onClick={()=>navigate("/chat")}
>
Beauty Consultation
</button>

<button
onClick={()=>navigate("/chat")}
>
Skin Care Help
</button>

</div>

)

}

</>

)

}

export default SupportButton