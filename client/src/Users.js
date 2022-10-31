import React, { useState } from "react"
import "./styles.css"
function Users(props) {
const [buttonState,setButtonState] = useState(false)
const [state, setState] = useState({
    firstName :"",
    lastName:"",
    email:"",
    password:""
}

)

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
            <h1>Connected to the User page</h1>
            <div className='bigContainer'>
                <div className="formContainer" >
<div class ="allButtons">
    <button className="eachButton" onClick = {removingClass} >Signup</button>
    <button className="eachButton" onClick = {addingClass} >Login</button>
    <button className={buttonState ? "moveButtonState RightButton": "moveButtonState"}>{buttonState ? "Login": "Signup"}</button>
</div>
            <form autocomplete="off" class={buttonState ? "form": "form signupForm"}>
            <h1 class ="fontName">Create an INSTA-CART Account</h1><br />
           

                <div className ="inputText">
                    <input type = "text" placeholder="First Name" value =""/>
                </div>
                <div className ="inputText">
                    <input type = "text" placeholder="Last Name" value =""/>
                </div>
                <div className ="inputText">
                    <input type = "email" placeholder="Email" value ="" />
                </div>
                <div className ="inputText">
                    <input type = "password" placeholder="Create New Password" value =""/>
                </div>
                <div className ="inputText">
                    <input type = "password" placeholder="Confirm Password" value =""/>
                </div>
                <div className= "sumbitButtonCenter">
                <button class="sumbitButton" type="sumbit">Signup</button>
                </div>

        
            </form>
            <form autocomplete="off" className={buttonState ? "form loginForm": "form"}>
                <div class ="inputText">
                    <input type = "email" placeholder="Email" value =""/>
                </div>
                <div className ="inputText">
                    <input type = "password" placeholder="Create New Password" value =""/>
                </div>
                <div className= "sumbitButtonCenter">
                <button className="sumbitButton" type="sumbit">Signup</button>
                </div>
            </form>
            </div>
            </div>
        </section>

    );
}

export default Users;