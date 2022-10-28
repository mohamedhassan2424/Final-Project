import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {
useEffect(() => {
  axios.get('"http://localhost:8080/dogs').then(data =>{
    console.log(data)
  })
},[])

  return (
    <div className="App">
      <h1>Cats App</h1>
    </div>
  );
}

export default App;
