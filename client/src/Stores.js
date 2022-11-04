import React ,{useState, useEffect} from "react"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
function Stores(props) {
  
const [stores,setStores] = useState([])
  useEffect(() => {

    axios.get('http://localhost:8080/allStores')
    .then(response =>{
    console.log(response.data)
    setStores(response.data)
    })
    },[])

    
  return (

    <div>
      <h1>LITE-CART</h1>
      <div>
      <Nav/>
      </div>
      <div>
  <h3  className ="storeTitle" >Recentely Visted</h3>
  <div className="sampleDataContainer">
  <div className="storeContent">
<div className="logoImages">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2138/19b444c0-481d-41cf-b017-4d1666e81006.png" / >

  
</div>
<p className="textAlighnment"> METRO</p>
</div>
<div className="storeContent">
<div className="logoImages">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/227/0b338c85-d46f-4a49-a48c-9dd281ccfdcf.png" / >


</div>
<p className="textAlighnments"> City Market</p>
</div>
</div>
</div>

<div>
<h3 className ="storeTitle">All Stores in Toronto</h3>




<ul className ="storeContainer">
{ stores && stores.map((store) => (
 
<li className="eachStore">
  <div className="mainClassInStores">
<div className="logoImage">
<Link to="/products"><img src={store.image_link} /></Link>

  
</div>

<div className="contentOfStore">
<p className ="newText"> NEW</p>
<Link   to={`/products/${store.store_name}`}><p> {store.store_name}</p></Link>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>
  </li>
  
  )
  )
}
</ul>





  {/* <li className="eachStore">
  <div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2138/19b444c0-481d-41cf-b017-4d1666e81006.png" / >

  
</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> METRO</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>
  </li>


  <li className="eachStore">
<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/227/0b338c85-d46f-4a49-a48c-9dd281ccfdcf.png" / >

  
</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> City Market</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>

  </li>

  <li className="eachStore">

  <div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/311/e206e4c7-3dd9-48b1-8dc2-f4ce50df7414.png" / >

  
</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Loblaws</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



  </li>
  
  <li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/354/fc4be33a-bff9-4076-9d57-4b5e08377771.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Costco</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/462/2eba6946-8810-481e-bd3c-6852d5121d51.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Walmart</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>



<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/523/2415d566-6141-49ff-8444-e712a9e4a4b9.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Shoppers Drug Mart</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>



<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/536/fbde4b35-8a0c-4704-a3d7-85e47576d615.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Pusateri's</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>



<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/551/0231a932-a563-49ca-8da7-532cb5cdfeb6.png"/ >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Staples</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/610/2a87c25b-5a28-4cb8-b1bc-cd5c57d3dae6.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> M&M Food Market</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/635/8731ed2a-42a0-46a1-baf3-07713a8c6475.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Bulk Barn</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1256/7e9d582a-bf60-4a4d-8989-8705c0f39e13.jpg" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Eataly</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1427/55aae31c-6c4e-4c30-a6fd-b7fd4018e85c.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Organic Garage</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1509/77eca83d-0d98-410d-8047-6f205fe0623d.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Indigo</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1555/27f6ac04-0756-4fcc-ab3e-06bf97b9e3a2.jpg" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Sephora Canada</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1603/7d6204e2-859f-499d-8236-e15aaf252007.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Dollarama</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1634/84f40c52-a22b-4a89-a986-b82e09cb7455.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p>Mastermind Toys</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1646/1ba1f48f-c935-42ae-9129-d3979a38a395.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> LCBO</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1702/c748f770-ee1f-494d-9f6b-606a3d276429.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> No Frills</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1721/91622d5c-9f13-4f6d-9d4d-eaef6367c947.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> McEwan Fine Foods</p>
<p> </p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1765/4c39dd8f-9554-41b9-86f8-6e13b6525da2.jpg" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> The Body Shop Canada</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1898/f7672f30-e00b-490d-8abd-ca339b4a9914.jpg" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Healthy Planet</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1928/9afc1db8-0780-4246-91c5-8f4d4de1fc33.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Micheal's Canada</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/1992/98097d7f-1969-40fd-8f4d-b8d5c6d28402.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Popeye's Supplements</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2044/15a00d4e-9520-47e6-af90-1c10d1ee76e5.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Grande Cheese Markets</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2047/99c9f3cb-3660-4d33-91fd-a590f92fa445.jpg" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Super Natural Market</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2081/82c88696-2779-4555-bd8c-0c69477af354.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Dolce & Gouramando</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2127/a8fc4dcb-5fdf-4bec-9b3c-cff8fa8ec7ac.jpg" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Greenhouse</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2147/4d6986c6-3328-4d48-95d9-760d4e4c578d.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> XMarket</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>

<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2176/ca7efb30-bbab-437c-877f-7dd37fe3c652.png" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Harvest Wagon</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>



</li>



<li className="eachStore">

<div className="mainClassInStores">
<div className="logoImage">
<img src="https://www.instacart.com/image-server/72x/www.instacart.com/assets/domains/warehouse/logo/2177/2d8b7943-5619-401b-bc3d-504990263af7.jpg" / >


</div>
<div className="contentOfStore">
<p className ="newText"> NEW</p>
<p> Loblaws</p>
<p className ="deliveryText"> DELEIVER WITHTIN AN HOUR</p>
<p className="storePriceText"> In-stores prices</p>
</div>
</div>




</li> */}



  




</div>
    </div>


  );
}

export default Stores;
