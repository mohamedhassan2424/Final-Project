import React from "react";
import Nav from "./Nav";
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies()
function Logout() {
    const history = useHistory();

    const {firstNameSaved,lastNameSaved,emailSaved ,savingFirstName,savingLastName,savingEmail } = useContext(userContext)
    const removingState =() =>{
        savingFirstName('')
        savingLastName('')
        savingEmail('')
        cookies.remove('emailValue')
        cookies.remove('firstNameValue')
        cookies.remove('lastNameValue')

        let path = `/users`;
            // let history = useHistory();
            history.push(path);
    }
    return (
        <div >
            <Nav />
            
            <h1 className ="userStatment">User Must Logout before access user Page</h1><br></br>
            <div className="buttonStyle">
            <button onClick={removingState}>Logout Button</button>
            </div>
        </div>
    )
}

export default Logout;