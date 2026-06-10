function Home({setActivePage}){

    return(

        <div className="home">

            <div className="hero-section">

                <div className="overlay">

                    <h1>
                        Luxury Beauty Starts Here ✨
                    </h1>

                    <p>
                        Discover premium skincare, makeup and beauty
                        essentials carefully selected to help you glow
                        with confidence every day.
                    </p>

                    <button
                        onClick={()=>setActivePage("products")}
                    >
                        Shop Collection
                    </button>

                </div>

            </div>

            <p className="beauty-line">
                Your Glow Is Your Signature 💖
            </p>

            <div className="offers-section">

                <h2>
                    Exclusive Offers
                </h2>

                <div className="offers-container">

                    <div className="offer-card">

                        <h3>
                            20% OFF
                        </h3>

                        <p>
                            Use Coupon GLOW20
                        </p>

                    </div>

                    <div className="offer-card">

                        <h3>
                            Free Delivery
                        </h3>

                        <p>
                            Orders Above ₹999
                        </p>

                    </div>

                    <div className="offer-card">

                        <h3>
                            Buy 1 Get 1
                        </h3>

                        <p>
                            Selected Products
                        </p>

                    </div>

                </div>

            </div>

            <div className="tips-section">

                <h2>
                    Beauty Tips
                </h2>

                <div className="tips-container">

                    <div className="tip-card">
                        💧 Drink More Water Daily
                    </div>

                    <div className="tip-card">
                        ☀️ Apply Sunscreen Everyday
                    </div>

                    <div className="tip-card">
                        🌸 Follow A Consistent Routine
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Home