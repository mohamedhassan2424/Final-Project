import React , {useEffect, useState} from "react";
import { useContext } from "react";

import { userContext } from "./providers/UserProvider";

import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, useLocation,  } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import Cookies from 'universal-cookie';


function StoreProduct(props){
    const cookies = new Cookies();
    const {storeIdNumber, firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,settingStoreIdValue , savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction} = useContext(userContext)
    const storeParamter=  useParams()
    console.log('The storeNameid',storeParamter)
    cookies.set('storeName',storeParamter.id)
    const [dairy, setDairy] = useState([])
    const [beverage ,setBeverage] = useState([])
    const [frozenFood, setFrozenFood] = useState([])
    const [storeIdState, setStoreIdState] = useState([])
    console.log(savingStoreName,"savingStoreName")
    useEffect(() => {

        axios.get('http://localhost:8080/frozenFood')
            .then(response => {
                console.log(response.data)
                setFrozenFood(response.data)
            })
    }, [])
    useEffect(() => {

        axios.get('http://localhost:8080/Beverage')
            .then(response => {
                console.log(response.data)
                setBeverage(response.data)
            })
    }, [])

     useEffect(() => {

        axios.get('http://localhost:8080/dairy')
            .then(response => {
                console.log(response.data)
                setDairy(response.data)
                
            })
    }, [])

    useEffect(() => {

        axios.get('http://localhost:8080/allStores')
            .then(response => {
                console.log('setStoreIdState',response.data)
                setStoreIdState(response.data)

            })
    }, [])

    const filteredStoreData = storeIdState.filter((storeObject)=>{
        if(storeObject.store_name === storeParamter.id){
        cookies.set('storeId',storeObject.id)
        console.log("Cookies StoreId",cookies.get('storeId'))
        settingStoreIdValue(storeObject.id)
        }
    })

    return(
<div>
    <Nav />
    <h1>The store Selected is {storeParamter.id}</h1>
    <h1>Welcome to {storeParamter.id} </h1>
    <div className="eachrow">
    <h1>{dairy[0] ? dairy[0].category_name_value:<h1>Waiting .......</h1>}</h1>
                {dairy && dairy.map((product) => (

                    <div className="outlineBox">
                        <div className="outerTopProduCtontainer">
                            <div className="toptopheaderName">
                                <div className="topheaderName">
                                    Featured
                                </div>

                                
                            </div>
                            <div className="chocalteImage">
                            <Link to={`/products/${product.id}`}><img src={product.product_url} /></Link>
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
                            <div className="addContent"> <Link to={`/product/${product.id}`}><h3>Add</h3></Link>
                            </div>
                        </div>
                    </div>

                ))


                }
             
            </div>
 <div className="eachrow">
 <div className ="titlePageCategoryProduct">  <h1>{frozenFood[0]?frozenFood[0].category_name_value :<h1>Waiting .......</h1>}</h1></div>
{frozenFood && frozenFood.map((product) => (

<div className="outlineBox">
    <div className="outerTopProduCtontainer">
        <div className="toptopheaderName">
            <div className="topheaderName">
                Featured
            </div>

            
        </div>
        <div className="chocalteImage">
        <Link to={`/products/${product.id}`}><img src={product.product_url} /></Link>
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
        <div className="addContent"> <Link to={`/product/${product.id}`}> <h3>Add</h3></Link>
        </div>
    </div>
</div>

))


}
 </div>



 <div className ="titlePageCategoryProduct"><h1>{beverage[0]?beverage[0].category_name_value:<h1>Waiting.......</h1>}</h1></div>     
 <div className="eachrow">

{beverage && beverage.map((product) => (

<div className="outlineBox">
    <div className="outerTopProduCtontainer">
        <div className="toptopheaderName">
            <div className="topheaderName">
                Featured
            </div>

            
        </div>
        <div className="chocalteImage">
        <Link to={`/products/${product.id}`}><img src={product.product_url} /></Link>
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
        <div className="addContent"><Link to={`/product/${product.id}`}> <h3>Add</h3></Link>
        </div>
    </div>
</div>

))


}

</div>




            
</div>
    );
}

export default StoreProduct;