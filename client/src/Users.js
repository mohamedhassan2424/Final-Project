import React, { useState } from "react"
import "./styles.css"
import classNames from "classnames";
function Users(props) {
const [buttonState,setButtonState] = useState(false)
//    const signupBtn = document.querySelector(".signupBtn");
//    const logInBtn = document.querySelector(".loginBtn");
//    const moveBtn = document.querySelector(".moveBtn");

//    logInBtn.addEventListener("click",()=>{
// moveBtn.classList("RightBtn")
// })
//let buttonClass = "moveBtn"
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
    <button className={buttonState ? "moveBtn RightBtn": "moveBtn"}>Signup</button>
</div>
            <form autocomplete="off" class="userForm">
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
                <button class="sumbitBtn" type="sumbit">Signup</button>
                
            </form>
            </div>
            </div>
        </section>

    );
}

export default Users;