import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Prodcut";
function Products(props) {
    const [products, setProducts] = useState([])
    useEffect(() => {

        axios.get('http://localhost:8080/allProducts')
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
    }, [])
    return (
        <div className="mainContainerElement">
            <div className="navbar">
                <div className="logo">
                    <span className="logoName">LITE CART</span>
                    <img className="logoImage" src="https://media.istockphoto.com/vectors/vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector-vector-id1205419959?k=20&m=1205419959&s=612x612&w=0&h=F4gyp5wuFkCaZr00OQS8KPCSE1_4pHmFiOIM2TQlOPI=" />
                </div>
                <nav className="navlistItems">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/stores">Stores</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/main">Main</Link>
                        </li>
                        <li>
                            <Link to="/cart"><img className="cartIcon" alt="Image cart" src="https://img.icons8.com/parakeet/2x/shopping-cart.png"></img></Link>
                        </li>
                        <li>
                            <Link to="/summary">Summary Cart</Link>
                        </li>
                    </ul>

                </nav>
            </div>

            <div className="eachrow">

                {products && products.map((product) => (

                    <div className="outlineBox">
                        <div className="outerTopProduCtontainer">
                            <div className="toptopheaderName">
                                <div className="topheaderName">
                                    Featured Products
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
                                <span className="firstPrice">{product.price}</span> <span className="secoundPrice">          {product.sale_price}</span>
                            </div>
                            <div className="addContent"> <h3>Add</h3>
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