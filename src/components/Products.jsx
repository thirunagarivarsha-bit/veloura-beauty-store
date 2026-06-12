import { useState, useContext } from "react"
import ProductCard from "./ProductCard"
import { products } from "../services/productsData"
import { CartContext } from "../context/CartContext"

function Products() {

  const {
    addToCart,
    wishlistItems,
    setWishlistItems,
    cartItems
  } = useContext(CartContext)

  const [search, setSearch] = useState("")

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  const cartHandler = (item) => {
    addToCart(item)
    alert(item.name + " Added To Cart 🛒")
  }

  const wishlistHandler = (item) => {
    setWishlistItems([...wishlistItems, item])
    alert(item.name + " Added To Wishlist ❤️")
  }

  return (
    <div className="products-page">

      <h1>Luxury Beauty Collection</h1>

      <div className="count-section">
        <h3>❤️ Wishlist : {wishlistItems.length}</h3>
        <h3>🛒 Cart : {cartItems.length}</h3>
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search Products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products-container">

        {filteredProducts.map((item) => (

          <ProductCard
            key={item.id}
            item={item}
            cartHandler={cartHandler}
            wishlistHandler={wishlistHandler}
          />

        ))}

      </div>

    </div>
  )
}

export default Products