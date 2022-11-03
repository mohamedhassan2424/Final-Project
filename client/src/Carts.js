import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Cart.css";
import Nav from "./Nav";

function Carts(props) {
  return (
    <div>
      <nav className="navlistItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/cart">
              <img
                className="cartIcon"
                alt="Image cart"
                src="https://img.icons8.com/parakeet/2x/shopping-cart.png"
              ></img>
            </Link>
          </li>
          <li>
            <Link to="/summary">Summary Cart</Link>
          </li>
        </ul>
      </nav>

      <div className="your-cart">
        <h1>YOUR CART</h1>
      </div>

      <div>
        <button className="cart-show">
          <i className="fa-solid fa-cart-arrow-down"></i>Clear Cart
        </button>
      </div>

      <div>
        <div className="my-items">
          <div className="outlineBox">
            <div className="outerTopProduCtontainer">
              <div className="toptopheaderName"></div>
              <div className="chocolateImage">
                <img
                  className="image"
                  src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/051df510-051f-475a-afe7-47682b50381d/300x300.jpg"
                />
              </div>
              <hr></hr>
              <div className="ProductInforamtion">
                Nestlé Aero Milk Chocolate Bar 4 Pack 42 g
              </div>

              <div className="saleImage">
                <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" />
                <h4 className="saleDescription">SALE</h4>
              </div>
              <hr></hr>
              <div className="caloriesDescription">4 x 42g($2.67 per 100g)</div>
              <div className="priceInformation">
                <span className="firstPrice">$4.49</span>{" "}
                <span className="secoundPrice"> $5.49</span>
              </div>
              <div className="addContent">
                {" "}
                <h3>Add</h3>
              </div>
            </div>
          </div>
          <div className="outlineBox">
            <div className="outerTopProduCtontainer">
              <div className="toptopheaderName"></div>
              <div className="chocolateImage">
                <img
                  className="image"
                  src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/96c1ec03-cef1-4824-8b61-32fcd55a03e8/300x300.jpg"
                />
              </div>
              <hr></hr>
              <div className="ProductInforamtion">
                Liberté Mediterranee Yogurt Blackberry 500 g
              </div>

              <div className="saleImage">
                <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" />
                <h4 className="saleDescription">SALE</h4>
              </div>
              <hr></hr>
              <div className="caloriesDescription">500g($0.80 per 100g)</div>
              <div className="priceInformation">
                <span className="firstPrice">$4.49</span>{" "}
                <span className="secoundPrice"> $6.49</span>
              </div>
              <div className="addContent">
                {" "}
                <h3>Add</h3>
              </div>
            </div>
          </div>
          <div className="outlineBox">
            <div className="outerTopProduCtontainer">
              <div className="toptopheaderName"></div>
              <div className="chocolateImage">
                <img
                  className="image"
                  src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/e705341e-c803-4794-83f1-f30ccc6b9629/300x300.jpg"
                />
              </div>
              <hr></hr>
              <div className="ProductInforamtion">
                Cheerios Honey Nut Cereal 430 g
              </div>

              <div className="saleImage">
                <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" />
                <h4 className="saleDescription">SALE</h4>
              </div>
              <hr></hr>
              <div className="caloriesDescription">430g($1.04 per 100g)</div>
              <div className="priceInformation">
                <span className="firstPrice">$4.49</span>{" "}
                <span className="secoundPrice"> $6.49</span>
              </div>
              <div className="addContent">
                {" "}
                <h3>Add</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="summary-box">
      <div className="summary">
        <div className="title-summary">
          <h1>Summary</h1>
        </div>


        <div className="row">
          <h2>3 Items</h2> <h2>$18.47</h2>
        </div>

        <div className="row">
          <h2>Savings</h2> <h2>$3.00</h2>
        </div>

      <hr></hr>

    return (
        <div>
            <Nav />
            <h1>welcome to the cart page</h1>
            <h2>hello world</h2>
            <table className="">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
        </div>



            <div className="check-out">
              <button className="checkout">
                <i className="fa-regular fa-credit-card"></i>Checkout
              </button>
            </div>
      </div>
      </div>
      <hr></hr>
          </div>   
  );
}

export default Carts;
