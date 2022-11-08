import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import Cookies from "universal-cookie";
import "./Nav.css";
const cookies = new Cookies()
function Nav(props) {
  const history = useHistory();
  const {firstNameSaved,lastNameSaved,emailSaved ,savingFirstName,savingLastName,savingEmail } = useContext(userContext)
  const removingState =() =>{
      savingFirstName('')
      savingLastName('')
      savingEmail('')
      cookies.remove('emailValue')
      cookies.remove('firstNameValue')
      cookies.remove('lastNameValue')
      cookies.remove('userId')
      cookies.remove('storeId')
      cookies.remove('specfiedAddressId')
      cookies.remove('editProductObj')
      cookies.remove('storeName')
      cookies.remove('salesHistoryId')

      let path = `/users`;
          // let history = useHistory();
          history.push(path);
  }
    
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
          <li> {firstNameSaved ? <Link to="/stores">Products</Link>:<Link to="/users">Products</Link>}

          </li>
          <li>{firstNameSaved ? <Link to="/logout">Users</Link> :<Link to="/users">Users</Link>
            }
            
          </li>
          <li>
            {firstNameSaved ? <Link to="/about">About</Link>:<Link to="/users">About</Link>}
            
          </li>
          <li>
            {firstNameSaved?<Link to="/summary"><img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img></Link>:  <Link to="/users"><img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img></Link> }

          </li>
          <li>{firstNameSaved?  <Link to="/summary">Summary Cart</Link>:<Link to="/users">Summary Cart</Link> }
            
          </li>
          
          
          <li>
            {firstNameSaved?<Link to="/summary">Card Payment</Link>:<Link to="/users">Cart Payment</Link>}
          </li>
          <li>
          {firstNameSaved?<Link to="/status">Status</Link>:<Link to="/users">Status</Link> }
          </li>
          <li>{firstNameSaved?<Link to="/salesHistory">Sales History</Link>:<Link to="/users">Summary Cart</Link> }</li>
          <li>
            <button onClick={removingState}>Logout</button>
          </li>
        </ul>
                         
                        </nav>
        </div>
    )
}


export default Nav;