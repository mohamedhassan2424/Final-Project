import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserProvider, { userContext } from "./providers/UserProvider";
import Cookies from 'universal-cookie';
import "./Cart.css";
import Nav from "./Nav";

function Carts(props) {

  const { fullAddressId, editProdObj, salesHistory, allTheStore, storeIdNumber, firstNameSaved, lastNameSaved, emailSaved, savingStoreName, counterValue, userId, changingAddressId, settingStoreIdValue, changinSalesHistory, savingFirstName, savingLastName, savingEmail, savingUserId, savingStoreFunction, incrementFunction, decrementFunction, clearFunction, settingCounter } = useContext(userContext)

  const [addressLineOne, setAddressLineOne] = useState('')
  const [addressLineTwo, setAddressLineTwo] = useState('')
  const [cityAddress, setCityAddress] = useState('')
  const [stateRegion, setStateRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [allAddress, setAllAddress] = useState([])
  const cookies = new Cookies();
  const linkServer = "http://localhost:8080/"
  let currentUserId = cookies.get('userId')
  let firstNameVal = cookies.get('firstNameValue')
  let lastNameVal = cookies.get('lastNameValue')

  let fullName = firstNameVal + " " + lastNameVal;
  console.log("fullName", fullName)
  console.log("currentUserId", currentUserId)





  const registerAddress = () => {
    console.log("check point one")
    console.log('addressLineOne', addressLineOne)
    console.log('addressLineTwo', addressLineTwo)
    console.log('cityAddress', cityAddress)
    console.log('stateRegion', stateRegion)
    console.log('postalCode', postalCode)
    console.log('country', country)

    axios.post(`${linkServer}reigisterAddress`, { currentUserId, fullName, addressLineOne, addressLineTwo, cityAddress, stateRegion, postalCode, country })
      .then((response) => {
        console.log("Data Saved")
        window.location.reload(false)
      })

  }

  useEffect(() => {

    axios.get('http://localhost:8080/gettingAddress')
      .then(response => {
        console.log("gettingadddressData", response.data)
        setAllAddress(response.data)
      })
  }, [])

  const specfiedAddress = allAddress.map((eachAddressObject) => {
    let currentUserId = cookies.get('userId')
    console.log('currentUserId', currentUserId)
    console.log('eachAddressObject', eachAddressObject)
    if (eachAddressObject.user_id_address === Number(currentUserId)) {
      console.log('SpecfifedAddressObject', eachAddressObject)
      cookies.set("specfiedAddressId", eachAddressObject)
    }
  })
  const SpecfiedAddress = cookies.get("specfiedAddressId")
  console.log("specfifedAddresss", SpecfiedAddress)

  return (
    <div>
      <Nav />
      <div className="background-image">

        <div >
          <div className="your-cart">
            <h1 className="yourcart">YOUR CART</h1>
          </div>

          <div>
            <button className="cart-show">
              <i className="fa-solid fa-cart-arrow-down"></i>Clear Cart
            </button>
          </div>

          <div>
            <div className="my-items">
              <div className="outlineBox">
                <div className="outerTopProduCtontainer">
                  <div className="toptopheaderName"></div>
                  <div className="chocolateImage">
                    <img
                      className="image"
                      src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/051df510-051f-475a-afe7-47682b50381d/300x300.jpg"
                    />
                  </div>
                  <hr></hr>
                  <div className="ProductInforamtion">
                    Nestlé Aero Milk Chocolate Bar 4 Pack 42 g
                  </div>

                  <div className="saleImage">
                    <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" />
                    <h4 className="saleDescription">SALE</h4>
                  </div>
                  <hr></hr>
                  <div className="caloriesDescription">4 x 42g($2.67 per 100g)</div>
                  <div className="priceInformation">
                    <span className="firstPrice">$4.49</span>{" "}
                    <span className="secoundPrice"> $5.49</span>
                  </div>
                  <div className="addContent">
                    {" "}
                    <h3>Add</h3>
                  </div>
                </div>
              </div>
              <div className="outlineBox">
                <div className="outerTopProduCtontainer">
                  <div className="toptopheaderName"></div>
                  <div className="chocolateImage">
                    <img
                      className="image"
                      src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/96c1ec03-cef1-4824-8b61-32fcd55a03e8/300x300.jpg"
                    />
                  </div>
                  <hr></hr>
                  <div className="ProductInforamtion">
                    Liberté Mediterranee Yogurt Blackberry 500 g
                  </div>

                  <div className="saleImage">
                    <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" />
                    <h4 className="saleDescription">SALE</h4>
                  </div>
                  <hr></hr>
                  <div className="caloriesDescription">500g($0.80 per 100g)</div>
                  <div className="priceInformation">
                    <span className="firstPrice">$4.49</span>{" "}
                    <span className="secoundPrice"> $6.49</span>
                  </div>
                  <div className="addContent">
                    {" "}
                    <h3>Add</h3>
                  </div>
                </div>
              </div>
              <div className="outlineBox">
                <div className="outerTopProduCtontainer">
                  <div className="toptopheaderName"></div>
                  <div className="chocolateImage">
                    <img
                      className="image"
                      src="https://voila.ca/images-v3/2d92d19c-0354-49c0-8a91-5260ed0bf531/e705341e-c803-4794-83f1-f30ccc6b9629/300x300.jpg"
                    />
                  </div>
                  <hr></hr>
                  <div className="ProductInforamtion">
                    Cheerios Honey Nut Cereal 430 g
                  </div>

                  <div className="saleImage">
                    <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" />
                    <h4 className="saleDescription">SALE</h4>
                  </div>
                  <hr></hr>
                  <div className="caloriesDescription">430g($1.04 per 100g)</div>
                  <div className="priceInformation">
                    <span className="firstPrice">$4.49</span>{" "}
                    <span className="secoundPrice"> $6.49</span>
                  </div>
                  <div className="addContent">
                    {" "}
                    <h3>Add</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="summary-box">
            <div className="summary">
              <div className="title-summary">
                <h1>Summary</h1>
              </div>


              <div className="row">
                <h2>3 Items</h2> <h6>$18.47</h6>
              </div>

              <div className="row">
                <h2>Savings</h2> <h6>$3.00</h6>
              </div>

              <hr></hr>

              <div className="row">
                <h1>Total</h1> <h1>$18.47</h1>
              </div>



              <div className="check-out">
                <button className="checkout">
                  <i className="fa-regular fa-credit-card"></i>Checkout
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>





        <div>
          {SpecfiedAddress ? <div>
            <div className="abstractedAddress">
              <div className ="mainColorDiv">
                <h3 className="titleStyling">Mailing Address</h3>
                <div >
                  <p className="fontAddress">Full Name:  <span className ="spanStyling">{SpecfiedAddress.full_name}</span> </p> 
                </div>
                <div>
                  <p className="fontAddress">Address Line 1: <span className ="spanStyling">{SpecfiedAddress.address_line_1}</span></p>
                </div>
                <div>
                  <p className="fontAddress">Address Line 2:<span className ="spanStyling"> {SpecfiedAddress.address_line_2}</span></p>
                </div>
                <div>
                  <p className="fontAddress">City Selected:<span className ="spanStyling"> {SpecfiedAddress.city}</span></p>
                </div>
                <div>
                  <p className="fontAddress">State/Province/Region: <span className ="spanStyling">{SpecfiedAddress.state_region}</span></p>
                </div>
                <div>
                  <p className="fontAddress">Country: <span className ="spanStyling">{SpecfiedAddress.country}</span></p>
                </div>
                <div className= "editDeleteSection">
                <button className="paddingSpace">Edit Address</button>
                <button className="paddingSpace">Delete Address</button>
                </div>
                </div>
              </div>
            </div>




            : <div className="addressSec">
              <div className="AddresssSection">

                <form onSubmit={(event) => event.preventDefault()} >
                  <h1 className="fontName">Mailing Addresss</h1><br />

                  <div className="inputText">
                    <input value={addressLineOne} type="text" placeholder="Address Line 1" onChange={(event) => {
                      setAddressLineOne(event.target.value)
                      console.log(addressLineOne)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={addressLineTwo} type="text" placeholder="Address Line 1" onChange={(event) => {
                      setAddressLineTwo(event.target.value)
                      console.log(addressLineTwo)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={cityAddress} type="text" placeholder="City Name" onChange={(event) => {
                      setCityAddress(event.target.value)
                      console.log(cityAddress)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={stateRegion} type="text" placeholder="State/Province/Region" onChange={(event) => {
                      setStateRegion(event.target.value)
                      console.log(stateRegion)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={postalCode} type="text" placeholder="ZIP/Postal Code" onChange={(event) => {
                      setPostalCode(event.target.value)
                      console.log(postalCode)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={country} type="text" placeholder="Country:" onChange={(event) => {
                      setCountry(event.target.value)
                      console.log(country)
                    }} />
                  </div>

                  <button class="othersumbitButton" type="sumbit" onClick={registerAddress}>Signup</button>

                </form>
              </div>
            </div>}
          </div>



    </div>
      </div>
      );
}

      export default Carts;
