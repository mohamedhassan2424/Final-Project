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
      const mappingTheAxiosPost = salesHistoryIdCookie.map((eachProductSales)=>{
        axios.post('http://localhost:8080/addingToSalesHistory',{userId:eachProductSales.user_id_sales,stores_id:eachProductSales.stores_id_sales,products_id :eachProductSales.products_id,count_product:eachProductSales.count_product})
        .then((response)=>{
         console.log("All is good the data has been sent offf")
         
        })
      })
      
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




