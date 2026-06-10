import { useState } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./components/Home"
import Products from "./components/Products"
import Reviews from "./components/Reviews"
import Contact from "./components/Contact"
import Wishlist from "./components/Wishlist"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import ChatPage from "./components/ChatPage"
import SupportButton from "./components/SupportButton"

function App(){

  const [activePage,setActivePage] = useState("home")

  return(

    <>

      <div className="offer-banner">
        ✨ Summer Luxury Sale • Up To 50% OFF • Free Delivery Above ₹999 ✨
      </div>

      <Navbar setActivePage={setActivePage} />

      {activePage === "home" && (
        <Home setActivePage={setActivePage}/>
      )}

      {activePage === "products" && (
        <Products />
      )}

      {activePage === "reviews" && (
        <Reviews />
      )}

      {activePage === "contact" && (
        <Contact setActivePage={setActivePage}/>
      )}

      {activePage === "wishlist" && (
        <Wishlist />
      )}

      {activePage === "cart" && (
        <Cart setActivePage={setActivePage}/>
      )}
      {activePage==="chat" && <ChatPage />
     }

      {activePage === "checkout" && (
        <Checkout />
      )}

       <SupportButton
setActivePage={setActivePage}
/>
      

      <Footer />

    </>

  )

}

export default App