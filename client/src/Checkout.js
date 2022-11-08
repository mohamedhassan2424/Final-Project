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
  const [salesHistoryTable, setSalesHistoryTable] = useState([])
  const userIdValueNum = cookies.get('userId')
  useEffect(() => {

    axios.post('http://localhost:8080/extratingData',{ userIdInt: userIdValueNum })
        .then(response => {
            console.log("DATA recieved from the database", response.data)
            setSalesHistoryTable(response.data)
            
        })
        .catch((error) => {
        console.log('error received from the database', error)
            })
}, [])
console.log('salesHistoryTable',salesHistoryTable)

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
      axios.post('http://localhost:8080/addingToSalesHistory',{userId:5,prodcutID:"product"})
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




