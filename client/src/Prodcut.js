import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserProvider, { userContext } from "./providers/UserProvider";
import axios from "axios";

import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link ,useHistory} from "react-router-dom";
import Cookies from 'universal-cookie';
import Footer from "./Footer";
import Nav from "./Nav";

function Product() {
    
    const {allTheStore, storeIdNumber, firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId,settingStoreIdValue , savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction} = useContext(userContext)
    const [product, setProduct] = useState([])
    const [storeName, setStoreName] = useState('')
    const params = useParams();
    const cookies = new Cookies();
    const history = useHistory();
    console.log(params)
    console.log('allTheStore',allTheStore)
    let storeIDValue = cookies.get('storeId')

    useEffect(() => {

        axios.get('http://localhost:8080/allProducts')
            .then(response => {
                //console.log("FirstProduct",response.data)
                setProduct(response.data[params.id - 1])
                clearFunction()
            })
    }, [])
   
    const storeNameSaved = cookies.get('storeName')
    console.log("Productdata", product)
    console.log("SavingStoreName", storeNameSaved)
    const linkServer = "http://localhost:8080/"
    const userIdValue = cookies.get('userId')
    const storeIdName = cookies.get('storeName')
    const storeIdValue = cookies.get('storeId')
    let counterValueData = counterValue

    const addingProductDatabase = () => {
        console.log('CounterValueData',counterValueData)
        axios.post(`${linkServer}addingToSalesDatabase`, { productId: product.id, userId: userIdValue, storeId: storeIdValue, counterData:counterValue })
        .then((response)=>{
            console.log("Response When adding the data",response)
            let path = `/products/${storeNameSaved}`;
            // // let history = useHistory();
            history.push(path);
        })
    }

    return (
        <div>
            <Nav />
            <h1>The store Selected : {storeNameSaved}</h1>
            <h1>
                The product component which was clicked on was {params.id}
            </h1>
            <h2>Confirm to add this product to your Cart</h2>




            <div className="outlineBox">
                <div className="outerTopProduCtontainer">
                    <div className="toptopheaderName">
                        <div>
                            <div className="topheaderName">
                                Featured
                            </div>
                        </div>
                        <div>
                            Counter :
                            <button className="incrementDecrementButton" onClick={incrementFunction}>+</button>
                            <span>{counterValue}</span>
                            <button className="incrementDecrementButton" onClick={decrementFunction}>-</button>
            
                        </div>
                    </div>
                    <div className="chocalteImage">
                        <img src={product.product_url} />
                    </div>
                    <hr></hr>
                    <div className="ProductInforamtion">
                        {product.product_name}
                    </div>

                    <div className="saleImage">
                        <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
                    </div>
                    <hr></hr>
                    <div className="caloriesDescription">
                        <Link to={`/products/${product.id}`}> {product.product_description}</Link>
                    </div>
                    <div className="priceInformation">
                        <span className="firstPrice">${product.price}</span> <span className="secoundPrice">          ${product.sale_price}</span>
                    </div>
                    <div >
                        <button className="addContent" onClick={addingProductDatabase}><h3 className="confirm-product">Confirm Product</h3></button>
                    </div>

                </div>
            </div>



<Footer />
        </div>
    )
}

export default Product;
