
import Nav from "./Nav";
import './recipet.css'
import React from "react";

function Status(){

    return (
        <div>
            <Nav />
            <h1>Welcome to the Status page</h1>
            <div className ="MainContainerReceipt">
            <div className="headerStatment">
        <div className="contentofheader">
        <div className="reciptId"><h2 >RECEIPT</h2></div>
        <div> <h2> ORDER # JF34RE67-01</h2></div>
        </div>
        </div>
<div className="mainBody">
<div className="bodyInformation">
<div>
    <h1>Billing INFO</h1>
    <br></br>
    <p>sample addresss</p>
    <p>sample addresss</p>
    <p>sample addresss</p>
    <br></br>
    <p>VISA Ending in 4242</p>
    <p>Nov 4, 2017 09:423</p>
</div>
<div>
   <h2> Order Summary</h2>
    <br></br>
    <div className= "orderSumDiv">
        <div className="productName">
        <p>sample product </p>
        <p>sample product </p>
        <p>sample product </p>
        <br></br>
        <p>Subtotal</p>
        <p>Shipping</p>
        <p>Tax</p>
        <p>Total:</p>
        </div>
        <div>
<p>$45.67</p>
<p>$45.67</p>
<p>$45.67</p>
<p>$45.67</p>
<p>$45.67</p>
<p>$45.67</p>
<p>$45.67</p>
        </div>
    </div>
    
</div>
</div>
</div>

<div className="footer">
        <div className="footerHeader">
        <div className="reciptId"><h1 >Tracking</h1></div>
        <div> <h2> ORDER # JF34RE67-01</h2></div>
        </div>
        <div>
            <h1>ergdfgd</h1>
            <img src={"../Images/5a364b6d2c5557.7578312615135076931816 (1).png"}></img>
        </div>
        </div>
            </div>
        </div>
    )
}

export default Status;




