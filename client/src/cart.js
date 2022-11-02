import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart(props) {

    return (
        <div>
            <h1>welcome to the cart page</h1>
            <nav className="navlistItems">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/stores">Stores</Link>
                                </li>
                                <li>
                                    <Link to="/product">Product</Link>
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
                            </ul>
                            
                        </nav>
        </div>
    )
}

export default Cart