import { useState, useEffect } from "react"

function Products(){

  const [cartCount,setCartCount] = useState(0)
  const [wishlistCount,setWishlistCount] = useState(0)
  const [search,setSearch] = useState("")

  useEffect(()=>{

    const savedCart =
    localStorage.getItem("cartCount")

    if(savedCart){
      setCartCount(Number(savedCart))
    }

  },[])

  useEffect(()=>{

    localStorage.setItem(
      "cartCount",
      cartCount
    )

  },[cartCount])

  const products = [

    {
      image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
      name:"Glow Serum",
      price:899,
      discount:"20% OFF",
      rating:"⭐⭐⭐⭐⭐",
      skin:"Dry Skin"
    },

    {
      image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883",
      name:"Face Cleanser",
      price:499,
      discount:"15% OFF",
      rating:"⭐⭐⭐⭐☆",
      skin:"Oily Skin"
    }

  ]

  const filteredProducts =
  products.filter((item)=>

    item.name
    .toLowerCase()
    .includes(search.toLowerCase())

  )

  const cartHandler = (name)=>{

    setCartCount(cartCount + 1)

    alert(name + " Added To Cart 🛒")

  }

  const wishlistHandler = (name)=>{

    setWishlistCount(
      wishlistCount + 1
    )

    alert(name + " Added To Wishlist ❤️")

  }

  return(

    <div className="products-page">

      <h1>
        Luxury Beauty Collection
      </h1>

      <div className="count-section">

        <h3>
          ❤️ Wishlist : {wishlistCount}
        </h3>

        <h3>
          🛒 Cart : {cartCount}
        </h3>

      </div>

      <input
        type="text"
        placeholder="Search Products..."
        className="search-bar"
        value={search}
        onChange={(e)=>
          setSearch(e.target.value)
        }
      />

      <div className="products-container">

        {

          filteredProducts.map(
            (item,index)=>(

            <div
              className="product-card"
              key={index}
            >

              <img
                src={item.image}
                alt="product"
              />

              <h2>
                {item.name}
              </h2>

              <p>
                ₹{item.price}
              </p>

              <button
                onClick={()=>
                  cartHandler(item.name)
                }
              >
                Add To Cart
              </button>

              <button
                className="wish-btn"
                onClick={()=>
                  wishlistHandler(item.name)
                }
              >
                Wishlist ❤️
              </button>

            </div>

          ))

        }

      </div>

    </div>

  )

}

export default Products