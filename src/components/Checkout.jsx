import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Checkout(){
    const navigate=useNavigate()

const [formData,setFormData] = useState({

    name:"",
    email:"",
    phone:"",
    address:"",
    payment:"COD"

})

const [success,setSuccess] = useState("")

const changeHandler = (e)=>{

    const {name,value} = e.target

    setFormData({

        ...formData,
        [name]:value

    })

}

const orderHandler = ()=>{

    if(
        formData.name.trim()==="" ||
        formData.email.trim()==="" ||
        formData.phone.trim()==="" ||
        formData.address.trim()===""
    ){

        alert("All Fields Required")
        return
    }

    if(!formData.email.includes("@")){

        alert("Invalid Email")
        return
    }

    if(formData.phone.length !== 10){

        alert("Phone Must Be 10 Digits")
        return
    }

    localStorage.setItem(
        "customerName",
        formData.name
    )
    setSuccess(

"✨ Order Placed Successfully"

)

setTimeout(()=>{

navigate("/success")

},1500)
    

}

return(

<div className="checkout-page">

    <h1>
        Secure Checkout
    </h1>

    <div className="checkout-form">

        <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={changeHandler}
        />

        <br /><br />

        <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={changeHandler}
        />

        <br /><br />

        <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={changeHandler}
        />

        <br /><br />

        <textarea
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={changeHandler}
        />

        <br /><br />

        <select
            name="payment"
            value={formData.payment}
            onChange={changeHandler}
        >

            <option>COD</option>
            <option>UPI</option>
            <option>Credit Card</option>

        </select>

        <br /><br />

        <button onClick={orderHandler}>
            Place Order
        </button>

        <br /><br />

        <h3>Live Preview</h3>

        <p>Name : {formData.name}</p>
        <p>Email : {formData.email}</p>
        <p>Phone : {formData.phone}</p>
        <p>Payment : {formData.payment}</p>

        {

            success &&

            <h2 className="success-msg">
                {success}
            </h2>

        }

    </div>

</div>

)

}

export default Checkout