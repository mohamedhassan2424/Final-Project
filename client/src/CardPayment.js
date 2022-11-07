import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';

function CardPayment(){
    return(
        <div>
            <Nav />
            <h2>Welcome to Card Payment</h2>
            <div>
                <form className="paymentForm">
                    {/* <label htmlFor ="card-element"></label> */}
                    <div>
                    <CardElement />
                    </div>
            <button>Pay</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
// const App = () => (
//     <Elements stripe={stripePromise}>
//       <CardPayment />
//     </Elements>
//   );

export default CardPayment;