import { useState } from "react"

function SupportButton({setActivePage}){

const [openChat,setOpenChat] = useState(false)

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
GlowCart Support
</h3>

<p>
Hello Beautiful 💖
</p>

<p>
How can we help today?
</p>

<button
onClick={()=>setActivePage("chat")}
>
Track Order
</button>

<button
onClick={()=>setActivePage("chat")}
>
Refund Support
</button>

<button
onClick={()=>setActivePage("chat")}
>
Beauty Consultation
</button>

<button
onClick={()=>setActivePage("chat")}
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