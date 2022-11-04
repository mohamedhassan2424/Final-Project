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
         <div className="fruit-image">
                <img
                  className="image"
                  src="https://image.email.voila.ca/lib/fe37157175640479721077/m/1/f2216869-7f2d-4d6a-ace6-2daa6a2c47bf.png"
                />
              </div>
      </div>

      <div className="info">
        <p>
          LiteCart is a cutting-edge online grocery home delivery service in the
          Greater Toronto Area.</p>
          
           <p className="paragraph">We have partnered with many of your favourite grocery stores to build automated options that improve
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

      <div className="one">
        <h3>
        The groceries you ordered. No letdowns.
        </h3>
        <p>
        Straight from our warehouse to your door.
        </p>     
      </div>

      <div className="two">
        <h3>
        Delivered on time.
        </h3>
          <p>
          Pick a time. We'll be there.
          </p>
      </div>

      <div className="three">
        <h3>
        Thousands of products.
        </h3>
          <p>
          Everything on your grocery list or discover something new.
          </p>
      </div>

      <div className="four">
        <h3>
        Guaranteed fresh.
        </h3>
          <p>
          Our food is fresh or it's free.
          </p>
      </div>
      
      <div className="five">
      <h3>
      Affordable prices. Hot deals.
          </h3>
            <p>
            No hidden fees.
            </p>
      </div>

      <div className="six">
      <h3>
      Grocery delivery reimagined.
          </h3>
            <p>
            Our team and the tech behind it, at your service.
            </p>
      </div>

    </div>
  );
}

export default About;
