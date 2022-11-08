import React from "react";
import Nav from "./Nav";
import './recipet.css'
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
</div>
<div>
    Order Summary
</div>
</div>
</div>

<div className="footer">

</div>
            </div>
        </div>
    )
}

export default Status;