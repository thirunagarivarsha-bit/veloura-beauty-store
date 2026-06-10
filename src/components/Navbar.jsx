import { Link } from "react-router-dom"

function Navbar(){

    return(

        <nav className="navbar">

            <h2>
                Veloura 💄
            </h2>

            <ul className="nav-links">

                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/products">Products</Link>
                </li>

                <li>
                    <Link to="/reviews">Reviews</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>

                <li>
                    <Link to="/wishlist">
                        ❤️ Wishlist
                    </Link>
                </li>

                <li>
                    <Link to="/cart">
                        🛒 Cart
                    </Link>
                </li>

            </ul>

        </nav>

    )

}

export default Navbar