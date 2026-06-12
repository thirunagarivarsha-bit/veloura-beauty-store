import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Wishlist() {

  const {
    wishlistItems,
    setWishlistItems,
    addToCart
  } = useContext(CartContext)

  const moveToCart = (item) => {

    addToCart(item)

    setWishlistItems(
      wishlistItems.filter(
        (wish) => wish.id !== item.id
      )
    )

    alert(item.name + " moved to cart 🛒")
  }

  return (
    <div className="wishlist-page">

      <h1>My Wishlist ❤️</h1>

      <div className="wishlist-container">

        {wishlistItems.length === 0 ? (
          <h2>No Items In Wishlist</h2>
        ) : (
          wishlistItems.map((item) => (

            <div className="wishlist-card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h2>{item.name}</h2>

              <p>₹{item.price}</p>

              <button
                onClick={() => moveToCart(item)}
              >
                Move To Cart 🛒
              </button>

            </div>

          ))
        )}

      </div>

    </div>
  )
}

export default Wishlist