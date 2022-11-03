import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
function Nav(props) {
    const {firstNameSaved,lastNameSaved,emailSaved ,savingFirstName,savingLastName,savingEmail } = useContext(userContext)
    return(
        <div>
<nav className="navlistItems">
                        <ul>
                            <li>
                                {firstNameSaved ? <h1>Welcome Back :{ firstNameSaved} {lastNameSaved} </h1>: <h3>Please Sighn-up or Log-In</h3>}
                                
                        
                            </li>
          <li>
            <Link to="/home">Home </Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
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
            <Link to="/cart"><img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img></Link>
          </li>
          <li>
            <Link to="/summary">Summary Cart</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
                         
                        </nav>
        </div>
    )
}


export default Nav;