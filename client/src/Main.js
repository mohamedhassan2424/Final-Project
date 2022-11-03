import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";

function Main(){

    return(
<div>

    <h1>Welcome to the main Page</h1>
    <Nav/>
</div>
    );
}


export default Main;