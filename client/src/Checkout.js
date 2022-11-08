import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Cookies from 'universal-cookie';
import axios from 'axios';
const Checkout = () => {
  const cookies = new Cookies();

  const userIdValueNum = cookies.get('userId')
  const salesHistoryIdCookie = cookies.get('salesHistoryId')
console.log('salesHistoryTableCookie',salesHistoryIdCookie)

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
   
    console.log("paymentMethod", paymentMethod)
    console.log('error', error)

    if(paymentMethod){
      // axios.post('http://localhost:8080/addingToSalesHistory',{userId:salesHistoryIdCookie.user_id_sales,stores_id:salesHistoryIdCookie.stores_id_sales,products_id :salesHistoryIdCookie.products_id,count_product:salesHistoryIdCookie.count_product})
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};

export default Checkout;




