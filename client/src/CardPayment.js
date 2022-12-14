import React, {useState} from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {loadStripe} from '@stripe/stripe-js';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';
  import './styles.css'
import Checkout from "./Checkout";
function CardPayment(){
    const history = useHistory();
    const [payment, setPayment] = useState(false)


    const payButton = ()=>{
        setPayment(true)

    }
    console.log('paymenttt',payment)
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return(
        <div className="back-color">
        <div stripe={stripePromise}>
            <Nav />
            
            {payment && <Checkout />  }
            <div>
            <button className = {payment ? "payButtonShow" :"payButtonDoNotShow" } onClick= {payButton}><h1 className="paybutton">Pay</h1></button>
            
            </div>
       
            <div className="spacing-card">
            <Footer /> 
            </div>
        </div>
        </div>
    )
}


export default CardPayment;