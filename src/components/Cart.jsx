import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

function Cart(){

const [coupon,setCoupon] = useState("")
const [delivery,setDelivery] = useState("Normal Delivery")
const [giftWrap,setGiftWrap] = useState(false)

const couponRef = useRef()

const navigate = useNavigate()

const products = [

    {
        name:"Glow Serum",
        price:899
    },

    {
        name:"Lip Gloss",
        price:599
    }

]

let total = 0

products.forEach((item)=>{

    total += item.price

})

if(coupon === "GLOW20"){

    total -= 200

}

if(delivery === "One Day Delivery"){

    total += 150

}

if(giftWrap){

    total += 100

}

const applyCoupon = ()=>{

    setCoupon(
        couponRef.current.value
    )

}

return(

<div className="cart-page">

    <h1>
        Shopping Cart 🛒
    </h1>

    <div className="cart-container">

        {

            products.map((item,index)=>(

                <div
                    className="cart-card"
                    key={index}
                >

                    <h2>
                        {item.name}
                    </h2>

                    <p>
                        ₹{item.price}
                    </p>

                </div>

            ))

        }

    </div>

    <div className="coupon-section">

        <h2>
            Coupon Code
        </h2>

        <input
            ref={couponRef}
            type="text"
            placeholder="Enter Coupon Code"
        />

        <br /><br />

        <button
            onClick={applyCoupon}
        >
            Apply Coupon
        </button>

        <p>
            Available Coupon : GLOW20
        </p>

    </div>

    <div className="delivery-section">

        <h2>
            Delivery Option
        </h2>

        <select
            value={delivery}
            onChange={(e)=>
                setDelivery(
                    e.target.value
                )
            }
        >

            <option>
                Normal Delivery
            </option>

            <option>
                One Day Delivery
            </option>

        </select>

    </div>

    <div className="gift-section">

        <label>

            <input
                type="checkbox"
                checked={giftWrap}
                onChange={()=>
                    setGiftWrap(
                        !giftWrap
                    )
                }
            />

            Gift Wrap 🎁 (+₹100)

        </label>

    </div>

    <div className="summary-section">

        <h2>
            Order Summary
        </h2>

        <h2>
            Total : ₹{total}
        </h2>

        <button
            onClick={()=>
                navigate("/checkout")
            }
        >
            Proceed To Checkout
        </button>

    </div>

</div>

)

}

export default Cart