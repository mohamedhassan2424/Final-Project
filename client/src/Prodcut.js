import React, {useEffect,useState} from "react";
import { useContext } from "react";
import UserProvider, { userContext } from "./providers/UserProvider";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie';

import Nav from "./Nav";

function Product(){
    const {firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,increment ,decrement,clear} = useContext(userContext)
    const [product, setProduct] = useState([])
    const params = useParams();
    console.log(params)

    useEffect(() => {

        axios.get('http://localhost:8080/allProducts')
            .then(response => {
                //console.log("FirstProduct",response.data)
                setProduct(response.data[params.id -1])
                
            })
    }, [])
    const cookies = new Cookies();
const storeNameSaved= cookies.get('storeName')
    console.log("Productdata",product)
   console.log("SavingStoreName",storeNameSaved)
    return (
        <div>
<Nav />
            <h1>The store Selected: {storeNameSaved}</h1>
            <h1>
                The product component which was clicked on was {params.id} 
            </h1>
            <h2>Confirm to add this product to your Cart</h2>
            

        

<div className="outlineBox">
    <div className="outerTopProduCtontainer">
        <div className="toptopheaderName">
            <div className="topheaderName">
                Featured Products
                <h3>Count</h3>
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
            <span className="firstPrice">{product.price}</span> <span className="secoundPrice">          {product.sale_price}</span>
        </div>
        <div className="addContent"> <h3>Confirm to Add Product</h3>
        </div>
    </div>
</div>




        </div>
    )
}

export default Product;
