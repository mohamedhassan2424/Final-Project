import React, { useState } from "react"
import "./styles.css"
import  axios  from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Users(props) {
const [buttonState,setButtonState] = useState(false)
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [emailName, setEmailName] = useState('')
const [passwordName, setPasswordName] = useState('')

const [emailDatabase, setEmailDatabase] = useState('')
const [passwordDatabase, setPasswordDatabase] = useState('')


const linkServer = "http://localhost:8080/"


const register = ()=> {
    axios.post(`${linkServer}reigister`,{firstName, lastName, email:emailName, password:passwordName})
    .then((response)=>{
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })

}

const logInButton = () =>{
    axios.post(`${linkServer}login`,{email:emailDatabase, password:passwordDatabase})
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.log(error)
    })
}
const addingClass = ()=>{
    console.log("hello word")
    //let buttonClass = classNames("moveButtonState RightButton")
    setButtonState(true)
    
}
const removingClass = ()=>{
    console.log("hello word")
    //let buttonClass = classNames("moveButtonState")
    setButtonState(false)
}



    return (
        <section>
            <nav className="navlistItems">
                        <ul>
          <li>
            <Link to="/home">Home</Link>
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
        </ul>
                         
                        </nav>
            <h1>Connected to the User page</h1>
            <div className='bigContainer'>
                <div className="formContainer" >
<div className ="allButtons">
    <button className="eachButton" onClick = {removingClass} >Signup</button>
    <button className="eachButton" onClick = {addingClass} >Login</button>
    <button className={buttonState ? "moveButtonState RightButton": "moveButtonState"}>{buttonState ? "Login": "Signup"}</button>
</div>
            <form onSubmit={(event) => event.preventDefault()} class={buttonState ? "form": "form signupForm"}>
            <h1 className ="fontName">Create an INSTA-CART Account</h1><br />
           

                <div className ="inputText">
                    <input type = "text" placeholder="First Name" onChange={(event)=> {
                setFirstName(event.target.value)
                console.log(firstName)
}} />
                </div>
                <div className ="inputText">
                    <input type = "text" placeholder="Last Name"  onChange={(event)=> {
                setLastName(event.target.value)
                console.log(lastName)
}}/>
                </div>
                <div className ="inputText">
                    <input type = "email" placeholder="Email" onChange={(event)=> {
                setEmailName(event.target.value)
                console.log(emailName)
}}/>
                </div>
                <div className ="inputText">
                    <input type = "password" placeholder="Create New Password" onChange={(event)=> {
                setPasswordName(event.target.value)
                console.log(passwordName)
}}/>
                </div>
                <div className ="inputText">
                    <input type = "password" placeholder="Confirm Password" />
                </div>
                <div className= "sumbitButtonCenter">
                <button class="sumbitButton" type="sumbit" onClick={register}>Signup</button>
                </div>

        
            </form>
            <form  className={buttonState ? "form loginForm": "form"}>
                <div className ="inputText">
                    <input type = "email" placeholder="Email" onChange={(event)=> {
                setEmailDatabase(event.target.value)
                console.log(emailDatabase)
}}/>
                </div>
                <div className ="inputText">
                    <input type = "password" placeholder="Create New Password" onChange={(event)=> {
                setPasswordDatabase(event.target.value)
                console.log(passwordDatabase)
}}/>
                </div>
                <div className= "sumbitButtonCenter">
                <button className="sumbitButton" type="sumbit" onClick = {logInButton}>Signup</button>
                </div>
            </form>
            </div>
            </div>
        </section>

    );
}

export default Users;