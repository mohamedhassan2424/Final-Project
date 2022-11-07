import React from "react";


function Footer() {
    return (
        <div>
            <footer className="footerContainer">
                <div className="container">
                    <div className="containerRow">
                        <div className="firstRow">
                            <p className= "textdescription">Lite-Cart mission and values are focused on larger human causes. The chain's overarching mission statement is "To Feed the Human Spirit," and its "Zero Hunger, Zero Waste" mission includes helping end hunger while eliminating food waste.
                                Specifically, Lite-Cart  notes of the program, "A world with Zero Hunger | Zero Waste: that’s our commitment. As Canadian Startup grocer, we believe we have the size and scale, expertise and local connections to tackle this challenge."</p>
                        </div>
                        <div className="secoundRow">
                            <h5>Site Links</h5>
                            <ul className= "siteLinkColumn">
                                <li>Home</li>
                                <li>Stores</li>
                                <li>Products</li>
                                <li>Cart</li>
                                <li>Summary Cart</li>
                                <li>Payment</li>
                                <li>Logout</li>

                            </ul>
                        </div>
                        <div className="ThirdRow">

                        </div>
                    </div>
                </div>

            </footer>
        </div>
    );
}

export default Footer