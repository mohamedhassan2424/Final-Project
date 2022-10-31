import React from "react"
import "./styles.css"

function Users(props) {

   
    return (
        <section>
            <h1>Connected to the User page</h1>
            <input type="checkbox" id="switch"
                class="checkbox" />
            <label for="switch" class="toggle">
            </label>
            <div class='wrapper'>
                <div class="modalForm" >
<div class ="actionBtns">
    <button class="actionBtn signupBtn">Signup</button>
    <button class="actionBtn loginBtn">Login</button>
    <button class="moveBtn">Signup</button>
</div>
            <form autocomplete="off" class="userForm">
                <div class ="inputGroup">
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
                
                {/* <label for="email">Email Address:</label>
                <input type="email" name="email" placeholder="Enter Email" />
                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Register" /> */}
            </form>
            </div>
            </div>
        </section>

    );
}

export default Users;