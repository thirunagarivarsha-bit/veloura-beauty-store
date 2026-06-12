import React, { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Wishlist from "./components/Wishlist"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import ChatPage from "./components/ChatPage"
import OrderSuccess from "./components/OrderSuccess"
import ProtectedRoute from "./components/ProtectedRoute"
import SupportButton from "./components/SupportButton"

const Products = lazy(() => import("./components/Products"))
const ProductDetails = lazy(() => import("./components/ProductDetails"))

function App() {
  return (
    <>
      <div className="offer-banner">
        ✨ Summer Luxury Sale • Up To 50% OFF ✨
      </div>

      <Navbar />

      <Suspense fallback={<h2 style={{textAlign:"center"}}>Loading...</h2>}>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/chat" element={<ChatPage />} />

          <Route path="/success" element={<OrderSuccess />} />

          {/* FIXED: protected checkout */}
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

        </Routes>
      </Suspense>

      <SupportButton />
      <Footer />
    </>
  )
}

export default App