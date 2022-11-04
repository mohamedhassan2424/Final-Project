import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
function StoreProduct(props){
    const params=  useParams()
    console.log('The storeNameid',params)
    return(
<div>
    <h1>The store Selected is {params.id}</h1>
    <h1>hello world</h1>
</div>
    );
}

export default StoreProduct;