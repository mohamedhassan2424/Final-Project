import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import Cookies from 'universal-cookie';
import axios from "axios";


function Summary(props) {
    const { allTheStore, storeIdNumber, firstNameSaved, lastNameSaved, emailSaved, savingStoreName, counterValue, userId, settingStoreIdValue, savingFirstName, savingLastName, savingEmail, savingUserId, savingStoreFunction, incrementFunction, decrementFunction, clearFunction } = useContext(userContext)
    const [salesHistory, setSalesHistory] = useState([])
    const linkServer = "http://localhost:8080/"
    const cookies = new Cookies();
    const userIdValueNum = cookies.get('userId')
    console.log('userIdValueNum', userIdValueNum)
    const gettingData = () => {
        console.log("Hitting the axios request for getting the data information")
        axios.post(`${linkServer}extratingData`, { userIdInt: userIdValueNum })
            .then((response) => {
                console.log("DATA recieved from the database", response.data)
                setSalesHistory(response.data)
            })
            .catch((error) => {
                console.log('error received from the database', error)
            })

    }
    gettingData()
    return (
        <div>
            <h1>The userId recorded is {userIdValueNum}</h1>
            <h1>Welcome to the Summary Cart Page</h1>
            <Nav />
            <div className="Table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Product Description</th>
                        <th>Unit Price </th>
                        <th>Quantity </th>
                        <th>Store</th>
                        <th>Rating</th>
                    </tr>

                    {salesHistory && salesHistory.map((eachDataObject) => {
                        <tr>
                            <td> Product Image</td>
                            <td> data for the column</td>
                            <td> data for the column</td>
                            <td> data for the column</td>
                            <td> data for the column</td>
                            <td> data for the column</td>
                        </tr>
                    })}


                    <tr>
                        <td> Total:</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Summary;