import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Main(){

    return(
<div>
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
                            </ul>
                            <img className="cartIcon" alt="Image cart" src="../Images/5a364b6d2c5557.7578312615135076931816 (1).png"></img>
                        </nav>
    <h1>hello world</h1>
</div>
    );
}


export default Main;