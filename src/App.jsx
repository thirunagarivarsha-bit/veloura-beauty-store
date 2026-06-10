import React from "react"
import { Routes, Route } from "react-router-dom"

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

class ErrorBoundary extends React.Component{

  constructor(props){
    super(props)
    this.state = { hasError:false }
  }

  static getDerivedStateFromError(){
    return { hasError:true }
  }

  render(){

    if(this.state.hasError){
      return(
        <h1 style={{textAlign:"center"}}>
          Something Went Wrong
        </h1>
      )
    }

    return this.props.children
  }
}

function App(){

  return(

    <ErrorBoundary>

      <div className="offer-banner">
        ✨ Summer Luxury Sale • Up To 50% OFF • Free Delivery Above ₹999 ✨
      </div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/reviews" element={<Reviews />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/chat" element={<ChatPage />} />

      </Routes>

      <SupportButton />

      <Footer />

    </ErrorBoundary>

  )

}

export default App