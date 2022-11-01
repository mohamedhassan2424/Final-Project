import React from "react"

function Home(props) {
  return (

    <div>
      <h1>LITE-CART</h1>
      <div>
        <nav className="navlistItems">
          <ul>
            <li><a href="'">Home Page</a></li>
            <li><a href="'">Stores</a></li>
            <li><a href="'">Products</a></li>
            <li><a href="'">Products</a></li>
            <li><a href="'">Account</a></li>
            <li><a href="'">Contact</a></li>
          </ul>
          <img className="cartIcon" alt="Image cart" src="../Images/5a364b6d2c5557.7578312615135076931816 (1).png"></img>
        </nav>
      </div>
<div>
  <h1>Recentely Visted</h1>

</div>

<div>
<h3>All Stores in Toronto</h3>
<div className="mainClassInStores">
<div className="logoImage"></div>
<div className="contentOfStore">
<p> NEW</p>
<p> METRO</p>
<p> DELEIVER WITHTIN AN HOUR</p>
<p> In-stores prices</p>
</div>
</div>


</div>
    </div>


  );
}

export default Home;
