import React ,{ useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Carts(props) {

    return (
        <div>
            <h1>welcome to the cart page</h1>
            <h2>hello world</h2>
            <nav className="navlistItems">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/stores">Stores</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/main">Main</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/cart">
                            <img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img>
                        </Link>
                    </li>
                    <li>
                        <Link to="/summary">Summary Cart</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Carts;