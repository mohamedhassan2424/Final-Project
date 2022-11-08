import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import axios from "axios";
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Footer from "./Footer";
function SalesHistory(){
    const cookies = new Cookies();
    const history = useHistory();
    let currentUserId = cookies.get('userId')
    const [allSalesHistory, setAllSalesHistory] = useState([])
    useEffect(() => {

        axios.post('http://localhost:8080/allSalesHistory', { userIdInt: currentUserId })
          .then(response => {
            console.log("DATA recieved from the database", response.data)
            setAllSalesHistory(response.data)
    
          })
          .catch((error) => {
            console.log('error received from the database', error)
          })
      }, [])
      console.log('allSalesHistory',allSalesHistory)

      const totalSumFunction = ()=>{
        let totalSumValue= 0
        for(let i=0; i<allSalesHistory.length; i++){
            const totalPrice = allSalesHistory[i].sale_price
            const totalQuantity= allSalesHistory[i].count_product
            totalSumValue +=totalPrice*totalQuantity;
        }
        return totalSumValue;
    }
    return(
        <div className="backcolor">
            <Nav />
            <h3 className="ordercomplete">Sales History</h3>
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
                    </tr>

                    {allSalesHistory && allSalesHistory.map((eachDataObject) => (
                        <tr>
                            <td> <img src={eachDataObject.product_url} /></td>
                            <td> {eachDataObject.product_name} <br />
                            Prodcut Description{eachDataObject.product_description}
                            </td>
                            <td> ${eachDataObject.price}</td>
                            <td> {eachDataObject.count_product}</td>
                            <td> {eachDataObject.store_name}</td>
                            <td> {eachDataObject.rating}</td>
                            <td>{eachDataObject.quantity *eachDataObject.price}</td>
                            </tr>
                    ))}


                    <tr>
                        <td> Total: </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{totalSumFunction()}</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    )
}


export default SalesHistory;