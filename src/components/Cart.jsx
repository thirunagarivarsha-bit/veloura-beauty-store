import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {

  const { cartItems, removeFromCart } = useContext(CartContext)

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="cart-page">

      <h1>Shopping Cart 🛒</h1>

      {cartItems.length === 0 ? (
        <h2>Your cart is empty 😢</h2>
      ) : (
        <>
          <div className="cart-container">

            {cartItems.map((item, index) => (
              <div className="cart-card" key={index}>
                <h2>{item.name}</h2>
                <p>₹{item.price}</p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}

          </div>

          <h2>Total: ₹{total}</h2>
        </>
      )}

    </div>
  )
}

export default Cart