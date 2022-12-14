import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
function Home(props) {

    // const dummyProducts = [
    //     {
    //         imageUrl: "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/051df510-051f-475a-afe7-47682b50381d/300x300.jpg",
    //         name: "Nestlé Aero Milk Chocolate",
    //         description: "Chocalte",
    //         saleprice: 3.99,
    //         price: 5.99
    //     },
    //     {
    //         imageUrl: "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/051df510-051f-475a-afe7-47682b50381d/300x300.jpg",
    //         name: "Nesque",
    //         description: "Cerails",
    //         saleprice: 3.99,
    //         price: 5.99
    //     },
    //     {
    //         imageUrl: "https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/051df510-051f-475a-afe7-47682b50381d/300x300.jpg",
    //         name: "Lays",
    //         description: "Chips",
    //         saleprice: 3.99,
    //         price: 5.99
    //     }
    // ]

// /sampleProductData
    const [sampleProducts, setSampleProducts] = useState([])
    const [sampleStores, setSampleStores] = useState([])
    // useEffect(() => {
    //     setProducts(dummyProducts)
    // }, [])

    useEffect(() => {

        axios.get('http://localhost:8080/sampleProductData')
        .then(response =>{
        console.log(response.data)
        setSampleProducts(response.data)
        })
        },[])
        useEffect(() => {

            axios.get('http://localhost:8080/sampleStores')
            .then(response =>{
            //console.log(response.data)
            setSampleStores(response.data)
            console.log("Samples Stores",sampleStores)
            })
            },[])
    

    return (
        <div className="backcolor">
            <header className="header">
                <div className="navContainer">
                    {/* <h1>Hello world Mohamed Hassan</h1> */}
                    <div className="navbar">
                        
                        <Nav />
                        {/* <div className="backcolor"> */}
                    </div>
                        <div className="sale-photo">
                            <img className="secoundlogoImage" src="https://image.s11.sfmc-content.com/lib/fe3e157175640479711675/m/10/b7102c92-08fc-4bea-8ee9-0b595a543f04.png" />
                        <div className="sale-photo">
                            <img className="secound-logoImage" src="https://image.s11.sfmc-content.com/lib/fe3e157175640479711675/m/10/404a4ff9-d8c4-4f48-975e-79d421962f47.png" />
                       </div>
                        </div>

                </div>
            </header>
            
            <div className="catergories">
                <div className="parentcontainerrow">
                    <div className="eachrow">
                        <div className="othercolumn">
                            <img className="SaleImage" src="https://voila.ca/assets/content/2d92d19c-0354-49c0-8a91-5260ed0bf531/creatives/ff1a7020-6c07-4bee-8877-4ebea3116a83/0828551a64.png" />
                        </div>

                        {  
                        sampleProducts  &&   sampleProducts.map((product) => (
                            //<div key={product.name} >{product.name}</div>
                            

                        <div key={product.name} className="otherOutlineBox">
                            <div className="outerTopProduCtontainer">
                                <div className="toptopheaderName">
                                    <div className="topheaderName">
                                        Featured
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
                                    <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><span className="saleDescription">SALE</span>
                                </div>
                                
                                <div className="caloriesDescription">
                                   {product.product_description}
                                </div>
                                <div className="priceInformation">
                                    <span className="firstPrice">${product.price}</span> <span className="secoundPrice">         ${product.sale_price}</span>
                                </div>
                                <div className="addContent"><Link to='/stores'>Click on Store</Link>
                                </div>
                            </div>
                        </div>

                            


                        ))
                        }

           







                    </div>
                </div>
                <h3 className="productsSample">Shop at Your Favourite Stores!</h3>
                <ul className ="storeContainer">
{ sampleStores && sampleStores.map((store) => (
 
<li className="eachStore">
  <div className="mainClassInStores">
    <div className="store-logo">
<div className="logoImage">
<img src={store.image_link} />
</div>
</div>

<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p className="store-name"><Link to='/stores'>{store.store_name}</Link></p>

<div className="eta-info">
<p className ="deliveryText"> DELIVER WITHIN AN HOUR
<div className="bolt">
        <i className="fa-solid fa-bolt"></i>    
        </div>
        </p>
</div>


<p className="storePriceText"> In-store prices</p>
</div>
</div>
  </li>
  
  )
  )
}
</ul>

                <div>

                </div>

            </div>
            <div className="otherPossibleProducts">
                {/* <div className="outlineBox">
                    <div className="outerTopProduCtontainer">
                        <div className="toptopheaderName">
                            <div className="topheaderName">
                                Featured Products
                            </div>
                        </div>
                        <div className="chocalteImage">
                            <img src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/3b020a90-fece-4b71-ae38-6a1915edde9e/300x300.jpg" />
                        </div>
                        <hr></hr>
                        <div className="ProductInforamtion">
                            Wavy Lay's Potato Chips Original 235 g

                        </div>

                        <div className="saleImage">
                            <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
                        </div>
                        <hr></hr>
                        <div className="caloriesDescription">
                            235g ($1.06 per 100g)
                        </div>
                        <div className="priceInformation">
                            <span className="firstPrice">2.50</span> <span className="secoundPrice">          $3.99</span>
                        </div>
                        <div className="addContent"> <h3>Add</h3>
                        </div>
                    </div>
                </div>

                <div className="outlineBox">
                    <div className="outerTopProduCtontainer">
                        <div className="toptopheaderName">
                            <div className="topheaderName">
                                Featured Products
                            </div>
                        </div>
                        <div className="chocalteImage">
                            <img src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/c25612e5-04e7-4a89-8e06-eaa03f14e6dd/300x300.jpg" />
                        </div>
                        <hr></hr>
                        <div className="ProductInforamtion">
                            Rainbow Trout Fillet

                        </div>

                        <div className="saleImage">
                            <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
                        </div>
                        <hr></hr>
                        <div className="caloriesDescription">
                            0.34kg typically ($26.44 per kilogram)
                        </div>
                        <div className="priceInformation">
                            <span className="firstPrice">$8.99</span> <span className="secoundPrice">          $11.24</span>
                        </div>
                        <div className="addContent"> <h3>Add</h3>
                        </div>
                    </div>
                </div>

                <div className="outlineBox">
                    <div className="outerTopProduCtontainer">
                        <div className="toptopheaderName">
                            <div className="topheaderName">
                                Featured Products
                            </div>
                        </div>
                        <div className="chocalteImage">
                            <img src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/b9ed18b8-da8c-41da-b92e-97e483668b9d/300x300.jpg" />
                        </div>
                        <hr></hr>
                        <div className="ProductInforamtion">
                            Compliments Frozen Juice Berry Punch 283 ml

                        </div>

                        <div className="saleImage">
                            <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
                        </div>
                        <hr></hr>
                        <div className="caloriesDescription">
                            283ml ($0.31 per 100ml)
                        </div>
                        <div className="priceInformation">
                            <span className="firstPrice">$0.88</span> <span className="secoundPrice">          $1.19</span>
                        </div>
                        <div className="addContent"> <h3>Add</h3>
                        </div>
                    </div> */}
                {/* </div> */}










            </div>

            <div classNames="stores availble">

            </div>
            
<Footer />
        </div>
        
    );
}

export default Home;