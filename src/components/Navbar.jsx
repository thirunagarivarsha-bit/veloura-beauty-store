function Navbar({setActivePage}){

    return(

        <nav className="navbar">

            <h2>
                Veloura💄
            </h2>

            <ul className="nav-links">

                <li onClick={()=>setActivePage("home")}>
                    Home
                </li>

                <li onClick={()=>setActivePage("products")}>
                    Products
                </li>

                <li onClick={()=>setActivePage("reviews")}>
                    Reviews
                </li>

                <li onClick={()=>setActivePage("contact")}>
                    Contact
                </li>

                <li onClick={()=>setActivePage("wishlist")}>
                    ❤️ Wishlist
                </li>

                <li onClick={()=>setActivePage("cart")}>
                    🛒 Cart
                </li>

            </ul>

        </nav>

    )

}

export default Navbar