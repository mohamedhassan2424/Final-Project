import React, { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

    return (
        <div>
            <header className="header">
                <div className="navContainer">
                    {/* <h1>Hello world Mohamed Hassan</h1> */}
                    <div className="navbar">
                        <div className="logo">
                            <span className="logoName">LITE CART</span>
                            <img className="logoImage" src="https://media.istockphoto.com/vectors/vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector-vector-id1205419959?k=20&m=1205419959&s=612x612&w=0&h=F4gyp5wuFkCaZr00OQS8KPCSE1_4pHmFiOIM2TQlOPI=" />
                        </div>
                        <nav className="navlistItems">
                        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stores">Stores</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
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
                        <div className="eachcloumn">
                            <h1>Look no Further! We got Everything for you.</h1>
                            <h1>Grocery Shoppping has never been this fun.</h1>
                            <p>To deliver an exceptional shopping experience by offering the best service, value, quality, and freshest products while being good stewards of our environment and giving back to the communities we serve.</p>
                            <a href="" className="firstbutton">CHECK IT OUT &#x2192;</a>
                        </div>
                        <div className="eachcloumn">
                            <img className="secoundlogoImage" src="https://media.istockphoto.com/photos/shopping-basket-with-fresh-food-grocery-supermarket-food-and-eats-picture-id1216828053?k=20&m=1216828053&s=612x612&w=0&h=mMGSO8bG8aN0gP4wyXC17WDIcf9zcqIxBd-WZto-yeg=" />
                        </div>
                    </div>
                </div>
            </header>
            <h3 className="productsSample">Products Availble</h3>
            <div className="catergories">
                <div className="parentcontainerrow">
                    <div className="eachrow">
                        <div className="othercolumn">
                            <img className="SaleImage" src="https://voila.ca/assets/content/2d92d19c-0354-49c0-8a91-5260ed0bf531/creatives/ff1a7020-6c07-4bee-8877-4ebea3116a83/0828551a64.png" />
                        </div>

                        {  
                        sampleProducts  &&   sampleProducts.map((product) => (
                            //<div key={product.name} >{product.name}</div>
                            

                        <div key={product.name} className="outlineBox">
                            <div className="outerTopProduCtontainer">
                                <div className="toptopheaderName">
                                    <div className="topheaderName">
                                        Featured Products
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
                                   {product.product_description}
                                </div>
                                <div className="priceInformation">
                                    <span className="firstPrice">{product.price}</span> <span className="secoundPrice">         {product.sale_price}</span>
                                </div>
                                <div className="addContent"> <h3>Add</h3>
                                </div>
                            </div>
                        </div>

                        ))
                        }

           







                    </div>
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

        </div>
    );
}

export default Home;