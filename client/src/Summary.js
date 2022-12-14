import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import Cookies from 'universal-cookie';
import axios from "axios";


function Summary(props) {
    const { allTheStore, storeIdNumber, firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId,settingStoreIdValue ,changinSalesHistory, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction} = useContext(userContext)
    const [salesHistory, setSalesHistory] = useState([])
    const linkServer = "http://localhost:8080/"
    const history = useHistory();
    const cookies = new Cookies();
    const userIdValueNum = cookies.get('userId')
    console.log('userIdValueNum', userIdValueNum)
    useEffect(() => {

        axios.post('http://localhost:8080/extratingData',{ userIdInt: userIdValueNum })
            .then(response => {
                console.log("DATA recieved from the database", response.data)
                setSalesHistory(response.data)
                cookies.set('salesHistoryId',response.data)
            })
            .catch((error) => {
            console.log('error received from the database', error)
                })
    }, [])

    const salesHistoryIdCookie = cookies.get('salesHistoryId')
    const totalSumFunction = ()=>{
        let totalSumValue= 0
        for(let i=0; i<salesHistory.length; i++){
            const totalPrice = salesHistory[i].price
            const totalQuantity= salesHistory[i].count_product
            totalSumValue +=totalPrice*totalQuantity;
        }
        return totalSumValue;
    }

     const totalSumValue = totalSumFunction()
    console.log("Calling the sum Function above",totalSumFunction())
    const deleteProduct = (productObject) => {
      const userIDVal = productObject.user_id_sales
      const productValue = productObject.products_id
      console.log('userIDVal',userIDVal)
      console.log('productValue',productValue)
        console.log('ProductObject',productObject)
        
        axios.post('http://localhost:8080/removingProduct',{userIDNam:userIDVal, productIdVal :productValue })
        
        window.location.reload(false)
    }

    const editProduct = (productObject)=>{
        console.log("productObject",productObject)
        cookies.set('editProductObj',productObject)
        let path = `/editProduct`;
            // let history = useHistory();
            history.push(path);
    }


    const reDirectPage = ()=>{
        let path = `/cart`;
            // let history = useHistory();
            history.push(path);
    }
    return (
        <div className="backcolor">
            {/* <h1>The userId recorded is {userIdValueNum}</h1>
            <h1>Welcome to the Summary Cart Page</h1> */}
            <Nav />
            <div className="Table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Product Description</th>
                        <th>Unit Price </th>
                        <th>Quantity Selected </th>
                        <th>Store</th>
                        <th>Rating</th>
                        <th>Total Price </th>
                        <th>Delete Button</th>
                        <th>Edit Product</th>
                    </tr>

                    {salesHistory && salesHistory.map((eachDataObject) => (
                        <tr>
                            <td> <img src={eachDataObject.product_url} /></td>
                            <td> {eachDataObject.product_name} <br />
                            Prodcut Description{eachDataObject.product_description}
                            </td>
                            <td> ${eachDataObject.price}</td>
                            <td> {eachDataObject.count_product}</td>
                            <td> {eachDataObject.store_name}</td>
                            <td> {eachDataObject.rating}</td>
                            <td>{(eachDataObject.count_product *eachDataObject.price).toFixed(2)}</td>
                        <td><button className="delete-button" onClick={() => {deleteProduct(eachDataObject)}}>DELETE</button></td>
                            <td><button className="edit-button" onClick={()=>{editProduct(eachDataObject)}}>EDIT</button></td>
                            </tr>
                    ))}


                    <tr>
                        <td> Total: </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${(totalSumValue).toFixed(2)}</td>
                    </tr>
                </table>
                <button className="checkout-button" onClick={reDirectPage}>Proceded to Checkout</button>
            </div>
            <div className="spacing">
            <Footer /> 
            </div>
        </div>
    )
}

export default Summary;