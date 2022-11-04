import React from "react";
import "./About.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function About(props) {
  return (
    <div className="whole-page">
  
      <nav className="navlistItems">
        <ul>
          <li>
            <Link to="/home">Home</Link>
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
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/main">Main</Link>
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

      <div className="about">
        <h1 className="graphic">Welcome 
          <p>
          to LiteCart!
          </p>
         </h1>
      </div>

      <div className="info">
        <p>
          LiteCart is a cutting-edge online grocery home delivery service in the
          Greater Toronto Area.</p>
          
           <p>We have partnered with many of your favourite grocery stores to build automated options that improve
          the quality of the service experience for Canadians.</p> 
          
          <p>At LiteCart, we
          promise guaranteed freshness, at affordable prices, straight to your
          door.
        </p>
      </div>

      <div className="list">
        <h1>
          The LiteCart Difference.
        </h1>
      </div>

      
    </div>
  );
}

export default About;
