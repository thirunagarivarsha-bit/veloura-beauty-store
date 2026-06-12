import { createContext, useState } from "react"

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cartItems, setCartItems] = useState([])
  const [wishlistItems, setWishlistItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      wishlistItems,
      setWishlistItems
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider