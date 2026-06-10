function Wishlist(){

    const wishlistItems = [

        {
            name:"Glow Serum",
            price:899,
            image:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
        },

        {
            name:"Lip Gloss",
            price:599,
            image:"https://images.unsplash.com/photo-1586495777744-4413f21062fa"
        }

    ]

    return(

        <div className="wishlist-page">

            <h1>
                My Wishlist ❤️
            </h1>

            <div className="wishlist-container">

                {

                    wishlistItems.map((item,index)=>(

                        <div className="wishlist-card" key={index}>

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

                            <button>
                                Move To Cart 🛒
                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    )

}

export default Wishlist