import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
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
    <h1>Acceses the React DOM Render</h1>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
)
}

export function Home() {
  return <h2>Home</h2>;
}

export function About() {
  return <h2>About</h2>;
}

export function Users() {
  return <h2>Users</h2>;
}

//export default App;
