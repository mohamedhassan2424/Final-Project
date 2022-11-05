import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import "./Nav.css";

function Nav(props) {
    const {firstNameSaved,lastNameSaved,emailSaved ,savingFirstName,savingLastName,savingEmail } = useContext(userContext)
    return(
        <div>
<nav className="navlistItems">
                        <ul>
                            <li>
                                {firstNameSaved ? <h1>Welcome Back { firstNameSaved} {lastNameSaved} </h1>: <h1></h1>}
                                
                        
                            </li>
          <li>
            {firstNameSaved ?<Link to="/home">Home </Link>:<Link to="/users">Home </Link>}

          </li>
          <li>{ firstNameSaved ? <Link to="/stores">Stores</Link>:<Link to="/users">Stores</Link>}
  
          </li>
          <li> {firstNameSaved ? <Link to="/allproducts">Products</Link>:<Link to="/users">Products</Link>}

          </li>
          <li>{firstNameSaved ? <Link to="/logout">Users</Link> :<Link to="/users">Users</Link>
            }
            
          </li>
          <li>
            {firstNameSaved ? <Link to="/about">About</Link>:<Link to="/users">About</Link>}
            
          </li>
          
          <li>
            { firstNameSaved?<Link to="/main">Main</Link>:<Link to="/users">Main</Link>}
    
          </li>
          <li>{firstNameSaved?  <Link to="/cart"><img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img></Link>:  <Link to="/users"><img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img></Link> }
            
          </li>
          <li>
            {firstNameSaved?<Link to="/summary">Summary Cart</Link>:  <Link to="/users">Summary Cart</Link>  }

          </li>
          <li>{firstNameSaved? <Link to="/logout">Logout</Link>: <Link to="/users">Logout</Link>}
          </li>
        </ul>
                         
                        </nav>
        </div>
    )
}


export default Nav;