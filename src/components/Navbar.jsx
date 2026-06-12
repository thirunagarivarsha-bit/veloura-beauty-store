import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Navbar() {

  const { cartItems, wishlistItems } = useContext(CartContext)

  return (
    <nav className="navbar">

      <h2>Veloura 💄</h2>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/wishlist">
            ❤️ Wishlist ({wishlistItems.length})
          </Link>
        </li>

        <li>
          <Link to="/cart">
            🛒 Cart ({cartItems.length})
          </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar