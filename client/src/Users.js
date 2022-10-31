import React from "react"


function Users(props) {
    return (
        <section>
            <h1>Connected to the User page</h1>
            <form autocomplete="off">
                <label for="email">Email Address:</label>
                <input type="email" name="email" placeholder="Enter Email" />
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password"/>
                        <input type="submit" value="Register" />
                        </form>
                    </section>

                    );
}

                    export default Users;