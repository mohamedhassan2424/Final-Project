import React from "react";
import { useParams } from "react-router-dom";

function Product(){
    const params = useParams();
    console.log(params)
    return (
        <div>
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

            <h1>
                The product component which was clicked on was {params.id} 
            </h1>
        </div>
    )
}

export default Product;
