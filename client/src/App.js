import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link,Route } from "react-router-dom";
import Home from "./Home"
import About from "./About.js"
import Users from "./Users"
import Main from "./Main.js";
import Products from "./Products.js";
import Stores from "./Stores";
import Carts from "./Carts";
import Summary from './Summary'
import ErrorPage from "./ErrorPage";
import Product from "./Prodcut";
import Logout from "./Logout";
import StoreProduct from "./StoreProdcuts";
import EditProduct from "./EditProduct";
import OrderCheckout from "./OrderCheckout";
import CardPayment from "./CardPayment";
import Footer from "./Footer";
import SalesHistory from "./SalesHistory";
import Status from "./Status";
import EditAddress from './EditAddress'
// import {loadStripe} from '@stripe/stripe-js';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';
// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
function App() {
  // const getData = async () => {
  //   const {data} = await axios.get("http://localhost:8080/dogs")
  //   console.log(data)
  // };
  // useEffect(()=> {
  //   getData()
  // },[])
  useEffect(() => {

    axios.get('http://localhost:8080/dogs')
      .then(response => {
        console.log(response.data)
      })
  }, [])


  return (
    // <Elements stripe={stripePromise}>

  
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/users">
            <Users />
          </Route>
          <Route path="/main">
            <Main />

          </Route>
          <Route path="/stores">
            <Stores />
          </Route>
          <Route path="/products/:id">
            <StoreProduct />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/editProduct">
            <EditProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          
          <Route path="/cart">
            <Carts />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/orderCheckout">
            <OrderCheckout />
          </Route>
          <Route path="/cardPayment">
            <CardPayment />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path='/editAddress'>
          <EditAddress />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
          <Route path ="/salesHistory">
            <SalesHistory />
          </Route>
          <Route path="/footer">
            <Footer />
          </Route>
          <Route path='*' >
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
    // </Elements>
  )
}




export default App;
