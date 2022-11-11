import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Product from "./Prodcut";
import './styles.css'
import Nav from "./Nav";
import Footer from "./Footer";
import { useContext } from "react";
import Cookies from 'universal-cookie';
import { userContext } from "./providers/UserProvider";
import { useParams } from "react-router-dom";
function Products(props) {
    const cookies = new Cookies()
    const {firstNameSaved,lastNameSaved,emailSaved ,savingStoreName, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction} = useContext(userContext)
    const storeParamter=  useParams()
    console.log('The storeNameid',storeParamter)
    cookies.set('storeName',storeParamter.id)
    const [dairy, setDairy] = useState([])
    const [storesCatelogue,setStoresCatelogue] = useState([])
    const [beverage ,setBeverage] = useState([])
    const [frozenFood, setFrozenFood] = useState([])
    console.log(savingStoreName,"savingStoreName")

  useEffect(() => {

    axios.get('http://localhost:8080/allStores')
    .then(response =>{
    console.log(response.data)
    setStoresCatelogue(response.data)
    let allStores= response.data
    console.log('allStores',allStores)
    let filterStoreId= allStores.filter((eachObject) => eachObject.store_name ===storeParamter.id )
    console.log('filterStoreId',filterStoreId[0])
    let mainStoreObject = filterStoreId[0]
    let idValue = mainStoreObject.id
    console.log("idValue",idValue)
    cookies.set('mainStoreID',idValue)
    console.log("cookies.set('mainStoreID',idValue):::",cookies.get('mainStoreID'))
    })
    },[])

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
//   console.log("Paramter")
    return (
        <div className="mainContainerElement">
            
            <div className="navbar">
               <Nav />
               <div className="products-backcolor">
               <div className="banner">
                            <img className="banner" src="https://voila.ca/assets/content/2d92d19c-0354-49c0-8a91-5260ed0bf531/creatives/4af4835b-aab5-4b75-bd5e-3ed97cf6245d/71c68b3f75.png" />
                        </div>
            
            <h1 className="dairy">{dairy[0] ? dairy[0].category_name_value:<h1>Please Wait</h1>}</h1>
            <div className="eachrow">
            <div className="dairyimage">
                            <img className="dairyimage" src="https://voila.ca/assets/content/creatives/2224a084-66d8-43ca-a07f-0b46c988c4c0/ef4661e772.png" />
                        </div>
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
                            {/* <div className="addContent"> <Link to="/products/metro">  <h3 className="choose-store">Go To Store</h3></Link>  */}
                            <div className="addContent"><Link to={`/product/${product.id}`}> <h3 className="addtocart">Add</h3></Link>

                            </div>
                        </div>
                    </div>

                ))


                }
            </div>
 <div className ="titlePageCategoryProduct">  <h1 className="dairy">{frozenFood[0]?frozenFood[0].category_name_value :<h1>Waiting .......</h1>}</h1></div>
 <div className="eachrow">
 <div className="dairyimage">
                            <img className="dairyimage" src="https://voila.ca/assets/content/creatives/9df00116-aed0-4748-8e43-3d507f211f1b/8a2d863b95.png" />
                        </div>

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
        {/* <div className="addContent"> <Link to="/stores">  <h3 className="choose-store">Go To Store</h3></Link>  */}
        <div className="addContent"><Link to={`/product/${product.id}`}> <h3 className="addtocart">Add</h3></Link>

        </div>
    </div>
</div>

))


}
 </div>

 <div className ="titlePageCategoryProduct"><h1 className="dairy">{beverage[0]?beverage[0].category_name_value:<h1>Waiting.......</h1>}</h1></div>     
 <div className="eachrow">
 <div className="dairyimage">
                            <img className="dairyimage" src="https://voila.ca/assets/content/creatives/2eccd033-bc25-4aa0-acea-cccf741c79a5/8b33bf82fe.png" />
                        </div>
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
        {/* <div className="addContent"><Link to="/stores">  <h3 className="choose-store">Go To Store</h3></Link>  */}
        <div className="addContent"><Link to={`/product/${product.id}`}> <h3 className="addtocart">Add</h3></Link>

        </div>
    </div>
</div>

))


}

</div>



                </div>
                </div>
<Footer />
        </div>


    );
}

export default Products;