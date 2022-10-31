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
<div class ="buttons">
    <button class="signup-button">Signup</button>
    <button class="login-button">Login</button>
    
</div>
            <form autocomplete="off">
                
                {/* <label for="email">Email Address:</label>
                <input type="email" name="email" placeholder="Enter Email" />
                <label for="password">Password:</label>
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Register" /> */}
            </form>
        </section>

    );
}

export default Users;