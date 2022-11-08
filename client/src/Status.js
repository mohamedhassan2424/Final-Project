
import Nav from "./Nav";
import './recipet.css'
import React, {useState, useEffect} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

function Status(){
    const cookies = new Cookies();
    let currentUserId = cookies.get('userId')
    const [allSalesHistoryRecipet, setAllSalesHistoryRecipet] = useState([])
    const [allAddress, setAlAddress] = useState([])
    useEffect(() => {

        axios.post('http://localhost:8080/allSalesHistory', { userIdInt: currentUserId })
          .then(response => {
            console.log("DATA recieved from the database", response.data)
            setAllSalesHistoryRecipet(response.data)
    
          })
          .catch((error) => {
            console.log('error received from the database', error)
          })
      }, [])

      useEffect(() => {

        axios.post('http://localhost:8080/gettingAddress', { userIdInt: currentUserId })
          .then(response => {
            console.log("DATA recieved from the database", response.data)
            setAlAddress(response.data)
    
          })
          .catch((error) => {
            console.log('error received from the database', error)
          })
      }, [])


      console.log('allSalesHistoryRecipet',allSalesHistoryRecipet)
      console.log('allAddress',allAddress)
      return (
        <div>
            <Nav />
            <h1>Welcome to the Status page</h1>
            <div className ="MainContainerReceipt">
            <div className="headerStatment">
        <div className="contentofheader">
        <div className="reciptId"><h2 >RECEIPT</h2></div>
        <div> <h2> ORDER # JF34RE67-SK</h2></div>
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




