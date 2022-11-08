import React, {useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
import Checkout from "./Checkout";
function CardPayment(){
    const [payment, setPayment] = useState(false)


    const payButton = ()=>{
        setPayment(true)

    }
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return(
        <div className="backcolor">
        <div stripe={stripePromise}>
            <Nav />
            {payment && <Checkout />  }
            
            <h2>Welcome to Card Payment</h2>
            <div>
            <button onClick= {payButton}>Pay</button>
            
            </div>
       
            <div className="spacing">
            <Footer /> 
            </div>
        </div>
        </div>
    )
}


export default CardPayment;