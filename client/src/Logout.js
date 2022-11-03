import React from "react";
import Nav from "./Nav";
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function Logout() {
    const history = useHistory();

    const {firstNameSaved,lastNameSaved,emailSaved ,savingFirstName,savingLastName,savingEmail } = useContext(userContext)
    const removingState =() =>{
        savingFirstName('')
        savingLastName('')
        savingEmail('')

        let path = `/users`;
            // let history = useHistory();
            history.push(path);
    }
    return (
        <div>
            <Nav />
            <button className= "buttonStyle" onClick={removingState}>Logout Button</button>
        </div>
    )
}

export default Logout;