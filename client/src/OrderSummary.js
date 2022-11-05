import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function OrderSummary (product, price, quantity, subtotal) {
  const [orders, setOrders] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8080/orders')
      .then(response => {
        console.log(response.data)
        setOrders(response.data)
      })
    }, [])

  return (
    <main>
        <div class="card">
            <div class="card-header">
                <img src="https://rvs-order-summary-component.netlify.app/images/illustration-hero.svg" alt="">
            </div>
            <div class="card-body">
                <div class="card-title">Order Summary</div>
                <div class="card-text">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</div>
                <div class="card-plan">
                    <div class="card-plan-img"><img src="https://rvs-order-summary-component.netlify.app/images/icon-music.svg" alt=""></div>
                    <div class="card-plan-text">
                        <div class="card-plan-title">Annual Plan</div>
                        <div class="card-plan-price">$59.99/year</div>
                    </div>
                    <div class="card-plan-link"><a href="#!">Change</a></div>
                </div>
                <div class="card-payment-button">
                    <button>Proceed to Payment</button>
                </div>
                <div class="card-cancel-button">
                    <button>Cancel Order</button>
                </div>
            </div>
        </div>
    </main>
  )
}