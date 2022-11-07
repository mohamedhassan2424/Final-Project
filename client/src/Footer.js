import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import './footer.css'
function Footer() {
    return (
        <div>
            <footer className="footerContainer">
                <div className="container">
                    <div className="containerRow">
                        <div className="firstRow">
                        <h5 className= "titleStyle">About</h5>
                            <p className= "textdescription">Lite-Cart mission and values are focused on larger human causes. The chain's overarching mission statement is "To Feed the Human Spirit," and its "Zero Hunger, Zero Waste" mission includes helping end hunger while eliminating food waste.
                                Specifically, Lite-Cart  notes of the program, "A world with Zero Hunger | Zero Waste: that’s our commitment. As Canadian Startup grocer, we believe we have the size and scale, expertise and local connections to tackle this challenge."</p>
                        </div>
                        <div className="secoundRow">
                            <h5 className= "titleStyle">Site Links</h5>
                            <ul className= "siteLinkColumn">
                                <li><Link to="/home">Home </Link></li>
                                <li><Link to="/stores">Stores</Link></li>
                                <li><Link to="/cart">Summary Cart</Link></li>
                                <li><Link to="/cart">Summary Cart</Link></li>
                                <li><Link to="/cardPayment">Cart Payment</Link></li>
                                <li><Link to="/logout">Logout</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <hr className ="lineCss"/>
        <div>
            <p>Copyright C 2022 All Rights Reserved by LiteCart</p>
           
        </div>
            </footer>
        </div>
    );
}

export default Footer