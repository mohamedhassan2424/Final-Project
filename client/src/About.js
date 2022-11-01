import React from "react"


function About(props) {


    return (
        <header className= "header">
        <div className="navContainer">
    {/* <h1>Hello world Mohamed Hassan</h1> */}
    <div className="navbar">
        <div className ="logo">
                <img className="logoImage"src="https://media.istockphoto.com/vectors/vegetables-on-shopping-cart-trolley-grocery-logo-icon-design-vector-vector-id1205419959?k=20&m=1205419959&s=612x612&w=0&h=F4gyp5wuFkCaZr00OQS8KPCSE1_4pHmFiOIM2TQlOPI="  />
        </div>
        <nav className ="navlistItems">
            <ul>
                <li><a href="'">Home Page</a></li>
                <li><a href="'">Stores</a></li>
                <li><a href="'">Products</a></li>
                <li><a href="'">Products</a></li>
                <li><a href="'">Account</a></li>
                <li><a href="'">Contact</a></li>
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
        <img className="secoundlogoImage" src="https://media.istockphoto.com/photos/shopping-basket-with-fresh-food-grocery-supermarket-food-and-eats-picture-id1216828053?k=20&m=1216828053&s=612x612&w=0&h=mMGSO8bG8aN0gP4wyXC17WDIcf9zcqIxBd-WZto-yeg="  />
        </div>
    </div>
</div>
</header>
    );
}

export default About;