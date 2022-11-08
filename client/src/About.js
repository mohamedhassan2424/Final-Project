import React from "react";
import "./About.css";
import Footer from "./Footer";

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
          
           <p className="para">We have partnered with many of your favourite grocery stores to build automated options that improve
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

      <div className="group">

      <div className="one">
        <h3>
        The groceries you ordered. No letdowns.
        </h3>
        <h5>
        Straight from our warehouse to your door.
        </h5>     
        </div>
        <div className="photo">
      <img
                  className="image"
                  src="https://image.email.voila.ca/lib/fe37157175640479721077/m/1/cf24aaa6-c5d9-494f-a89e-7ae6342ba308.png"
                />
        </div>
      <div className="two">
        <h3>
        Delivered on time.
        </h3>
          <h5>
          Pick a time. We'll be there.
          </h5>
      </div>
      <div className="photo">
      <img
                  className="image"
                  src="https://image.email.voila.ca/lib/fe37157175640479721077/m/1/3152b52f-7c01-405f-99f7-63f753a2d659.png"
                />
        </div>


      <div className="three">
        <h3>
        Thousands of products.
        </h3>
          <h5>
          Everything on your grocery list or discover something new.
          </h5>
      </div>
<div className="photo">
      <img
                  className="image"
                  src="https://image.email.voila.ca/lib/fe37157175640479721077/m/8/985ed8cb-6c02-421e-a57e-b81096836b74.png"                />
        </div>


      <div className="four">
        <h3>
        Guaranteed fresh.
        </h3>
          <h5>
          Our food is fresh or it's free.
          </h5>
      </div>
      <div className="photo">
      <img
                  className="image"
                  src="https://image.email.voila.ca/lib/fe37157175640479721077/m/1/e5ad386f-46f7-4663-b430-0280e54cdb3f.png"                />
        </div>


      <div className="five">
      <h3>
      Affordable prices. Hot deals.
          </h3>
            <h5>
            No hidden fees.
            </h5>
      </div>
<div className="photo">
      <img
                  className="image"
                  src="https://image.email.voila.ca/lib/fe37157175640479721077/m/1/87d411eb-cf86-4f90-94d2-e0f35103d10e.png"                />
        </div>


      <div className="six">
      <h3>
      Grocery delivery reimagined.
          </h3>
            <h5>
            Our team and the tech behind it, at your service.
            </h5>
      </div>
      <div className="photo">
      <img
                  className="image"
                  src="https://image.email.voila.ca/lib/fe37157175640479721077/m/1/a4cb2769-c709-426d-89e2-11b8abb16f94.png"                />
        </div>

        <div className="terms">
          <h5>
          Please see our Terms & Conditions for full details.
          </h5>
        </div>

        <div className="seniors">
          <h3>
            Seniors & Mobility Discount
          </h3>
          <h5>
            Please contact our customer service team about our seniors and mobility discount:
            </h5>
            <h5>
             1.877.LITECART
          </h5>
          <h5>
          (1.877.864.5222)
          </h5>
        </div>
      </div>

            <Footer /> 
 
    </div>
  );
}

export default About;
