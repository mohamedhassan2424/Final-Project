import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home"
import About from "./About.js"
import Users from "./Users"
import Main from "./Main.js";
import Product from "./Products.js";
import Stores from "./Stores";
import Cart from "./cart";
function App() {
  // const getData = async () => {
  //   const {data} = await axios.get("http://localhost:8080/dogs")
  //   console.log(data)
  // };
  // useEffect(()=> {
  //   getData()
  // },[])
  useEffect(() => {

  axios.get('http://localhost:8080/dogs')
  .then(response =>{
  console.log(response.data)
  })
  },[])

  
  return (
  <Router>
    <div>
      

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/stores">
          <Stores />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
)
}




export default App;
