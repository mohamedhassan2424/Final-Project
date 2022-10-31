import React, { useState } from "react"
import "./styles.css"
function Users(props) {
const [buttonState,setButtonState] = useState(false)


const addingClass = ()=>{
    console.log("hello word")
    //let buttonClass = classNames("moveBtn RightBtn")
    setButtonState(true)
    
}
const removingClass = ()=>{
    console.log("hello word")
    //let buttonClass = classNames("moveBtn")
    setButtonState(false)
}

    return (
        <section>
            <h1>Connected to the User page</h1>
            <div class='wrapper'>
                <div class="modalForm" >
<div class ="actionBtns">
    <button className="actionBtn signupBtn" onClick = {removingClass} >Signup</button>
    <button className="actionBtn loginBtn" onClick = {addingClass} >Login</button>
    <button className={buttonState ? "moveBtn RightBtn": "moveBtn"}>{buttonState ? "Login": "Signup"}</button>
</div>
            <form autocomplete="off" class={buttonState ? "form": "form signupForm"}>
                <div className ="inputGroup">
                    <input type = "text" placeholder="First Name"/>
                </div>
                <div class ="inputGroup">
                    <input type = "text" placeholder="Last Name"/>
                </div>
                <div class ="inputGroup">
                    <input type = "email" placeholder="Email"/>
                </div>
                <div class ="inputGroup">
                    <input type = "password" placeholder="Create New Password"/>
                </div>
                <div class ="inputGroup">
                    <input type = "password" placeholder="Confirm Password"/>
                </div>
                <div class= "sumbitBtnCenter">
                <button class="sumbitBtn" type="sumbit">Signup</button>
                </div>
            </form>
            <form autocomplete="off" class={buttonState ? "form loginForm": "form"}>
                <div class ="inputGroup">
                    <input type = "email" placeholder="Email"/>
                </div>
                <div class ="inputGroup">
                    <input type = "password" placeholder="Create New Password"/>
                </div>
                <div class= "sumbitBtnCenter">
                <button class="sumbitBtn" type="sumbit">Signup</button>
                </div>
            </form>
            </div>
            </div>
        </section>

    );
}

export default Users;