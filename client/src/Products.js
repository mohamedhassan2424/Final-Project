import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Product from "./Prodcut";
import './styles.css'
import Nav from "./Nav";
function Products(props) {
//     const search = useLocation().search;
//   const id=new URLSearchParams(search).get('id');
//   
//   console.log("IDDDDDD",id);//12345.
// const fullUrl = window.location.href
// const pathName = window.location.origin
// console.log(window.location.origin)
    // const [products, setProducts] = useState([])
    const [dairy, setDairy] = useState([])
    const [beverage ,setBeverage] = useState([])
    const [frozenFood, setFrozenFood] = useState([])
    // useEffect(() => {

    //     Promise.all([
    //       axios.get('http://localhost:8080/frozenFood'),
    //       axios.get('http://localhost:8080/Beverage'),
    //       axios.get('http://localhost:8080/dairy')].
     //       .then((all)=>{
       //  })
    
    // }, [])
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
                <div className="logo">
                    <span className="logoName">LITE CART</span>
                    <img className="logoImage" src="https://media.istockphoto.com/vectors/vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector-vector-id1205419959?k=20&m=1205419959&s=612x612&w=0&h=F4gyp5wuFkCaZr00OQS8KPCSE1_4pHmFiOIM2TQlOPI=" />
                </div>
               <Nav />
            </div>
            <h1>{dairy[0] ? dairy[0].category_name_value:<h1>Waiting .......</h1>}</h1>
            <div className="eachrow">
             
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
                            <div className="addContent"> <Link to="/stores">  <h3>Choose a Store</h3></Link> 
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
        <div className="addContent"> <Link to="/stores">  <h3>Choose a Store</h3></Link> 
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
        <div className="addContent"><Link to="/stores">  <h3>Choose a Store</h3></Link> 
        </div>
    </div>
</div>

))


}

</div>



                
           

        </div>


    );
}

export default Products;