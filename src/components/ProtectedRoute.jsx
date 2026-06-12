import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function ProtectedRoute({ children }) {

  const { cartItems } = useContext(CartContext)

  if (cartItems.length === 0) {
    return <Navigate to="/products" replace />
  }

  return children
}

export default ProtectedRoute