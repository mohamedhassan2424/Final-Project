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
                            {/* <p className= "textdescription">Lite-Cart mission and values are focused on larger human causes. The chain's overarching mission statement is "To Feed the Human Spirit," and its "Zero Hunger, Zero Waste" mission includes helping end hunger while eliminating food waste.
                                Specifically, Lite-Cart  notes of the program, "A world with Zero Hunger | Zero Waste: that’s our commitment. As Canadian Startup grocer, we believe we have the size and scale, expertise and local connections to tackle this challenge."</p> */}
                                <ul className="footer-notes">
                                    <h5>Terms & Conditions</h5>
                                    <h5>Accessibility</h5>
                                    <h5>FAQ</h5>
                                    <h5>Careers</h5>
                                    <h5>Memberships</h5>
                                    <h5>Private Policy</h5>

                                </ul>
                        </div>
                        <div className="secoundRow">
                            <h5 className= "titleStyle">Site Links</h5>
                            <ul className= "siteLinkColumn">
                                <li><Link to="/home">Home </Link></li>
                                <li><Link to="/stores">Stores</Link></li>
                                <li><Link to="/stores">Product</Link></li>
                                <li><Link to="/summary">Summary Cart</Link></li>                              
                                <li><Link to="/summary">Cart Payment</Link></li>
        

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="lineCss"></div>
        <div className="copyright">
            <p>Copyright &copy; 2022 All Rights Reserved by LiteCart&trade;</p>
           
        </div>
            </footer>
        </div>
    );
}

export default Footer