import React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Summary(props) {
    return (
        <div>
            <h1>Welcome to the Summary Cart Page</h1>
            <Nav />
        </div>
    )
}

export default Summary;