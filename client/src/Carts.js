import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import UserProvider, { userContext } from "./providers/UserProvider";
import Cookies from 'universal-cookie';
import './summary.css'
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
function Carts(props) {

  const { fullAddressId, editProdObj, salesHistory, allTheStore, storeIdNumber, firstNameSaved, lastNameSaved, emailSaved, savingStoreName, counterValue, userId, changingAddressId, settingStoreIdValue, changinSalesHistory, savingFirstName, savingLastName, savingEmail, savingUserId, savingStoreFunction, incrementFunction, decrementFunction, clearFunction, settingCounter } = useContext(userContext)

  const [addressLineOne, setAddressLineOne] = useState('')
  const [addressLineTwo, setAddressLineTwo] = useState('')
  const [cityAddress, setCityAddress] = useState('')
  const [stateRegion, setStateRegion] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [allAddress, setAllAddress] = useState([])
  const [productOrdered, setProductOrdered] = useState([])
  const cookies = new Cookies();
  const history = useHistory();
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


  useEffect(() => {

    axios.post('http://localhost:8080/extratingData', { userIdInt: currentUserId })
      .then(response => {
        console.log("DATA recieved from the database", response.data)
        setProductOrdered(response.data)

      })
      .catch((error) => {
        console.log('error received from the database', error)
      })
  }, [])
  console.log('ProductOrdered', productOrdered)
  const specfiedAddress = allAddress.map((eachAddressObject) => {
    let currentUserId = cookies.get('userId')
    console.log('currentUserId', currentUserId)
    console.log('eachAddressObject', eachAddressObject)
    if (eachAddressObject.user_id_address === Number(currentUserId)) {
      console.log('SpecfifedAddressObject', eachAddressObject)
      cookies.set("specfiedAddressId", eachAddressObject)
    }
  })
  let SpecfiedAddress = cookies.get("specfiedAddressId")
  console.log("specfifedAddresss", SpecfiedAddress)

  const totalSumFunction = ()=>{
    let totalSumValue= 0
    for(let i=0; i<productOrdered.length; i++){
        const totalPrice = productOrdered[i].sale_price
        const totalQuantity= productOrdered[i].count_product
        totalSumValue +=totalPrice*totalQuantity;
    }
    return Math.round(totalSumValue * 10) / 10;
}
const totalSumValue = totalSumFunction()

const savingFunction = ()=>{
  let totalSumValueSalePrice= 0
  let totalSumValueOriginalPrice= 0
    for(let i=0; i<productOrdered.length; i++){
        const totalSalePrice = productOrdered[i].sale_price
        const originalPrice =productOrdered[i].price
        const totalQuantity= productOrdered[i].count_product
        totalSumValueSalePrice += totalSalePrice*totalQuantity;
        totalSumValueOriginalPrice+=originalPrice*totalQuantity
    }
    return Math.round((totalSumValueOriginalPrice-totalSumValueSalePrice) * 10) / 10;
}

const deleteAddress = ()=>{
  console.log("reached this point 1")
  axios.post('http://localhost:8080/removingAddress',{userId:currentUserId})
  .then((response)=>{
    console.log('Everything is good', response.data)
    console.log("reached this point 2")
  })
  cookies.remove("specfiedAddressId")
  window.location.reload(false)
}

const clearCart = ()=>{
  axios.post('http://localhost:8080/removingAllProducts',{userId:currentUserId})
  window.location.reload(false)
}

const editAdderss = () =>{
  let path = `/editAddress`;
  history.push(path);
}


const cardPayment = ()=>{
  let path = `/cardPayment`;
  history.push(path);
}
console.log('SpecfiedAddress',SpecfiedAddress)
console.log('allAddress',allAddress)
  return (
    <div>
      <Nav />
      <div className="background-image">

        <div >
          <div className="your-cart">
            <h1 className="yourcart">YOUR CART</h1>
          </div>

          <div>
            <button className="cart-show" onClick = {clearCart}>
              <i className="fa-solid fa-cart-arrow-down"></i>Clear Cart
            </button>
          </div>

          <div>
            <div className="othermy-items">


              {productOrdered && productOrdered.map((eachProductObject) => (
                <div className="outlineBox">
                  <div className="outerTopProduCtontainer">
                    <div className="toptopheaderj">
                      <div className="productCountDiv">
                        <div className="topheader">
                          <p>Total Count :   {eachProductObject.count_product}</p>
                        </div>
                      </div>

                    </div>
                    <div className="chocolateImage">
                      <img
                        className="image"
                        src={eachProductObject.product_url}
                      />
                    </div>
                    <hr></hr>
                    <div className="ProductInforamtion">
                      {eachProductObject.product_name}
                    </div>

                    <div className="saleImage">
                      <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" />
                      <h4 className="saleDescription">SALE</h4>
                    </div>
                    <hr></hr>
                    <div className="caloriesDescription">{eachProductObject.product_description}</div>
                    <div className="priceInformation">
                      <span className="firstPrice">{eachProductObject.sale_price}</span>{" "}
                      <span className="secoundPrice"> {eachProductObject.price}</span>
                    </div>
                    <div className="addContent">
                      {" "}

                    </div>
                  </div>
                </div>

              ))
              }



            </div>
          </div>

          <div className="summary-box">
            <div className="summary">
              <div className="title-summary">
                <h1>Summary</h1>
              </div>
              <div>
              <table className= "orderCheckoutTable">
                <tr>
                  <th>Item</th>
                  <th>HRS/QTY</th>
                  <th>Rate</th>
                  <th>Subtotal</th>
                </tr>
                {productOrdered && productOrdered.map((eachProductObject) => (
                  <tr>
                       <td>{eachProductObject.product_name}</td>
                       <td>{eachProductObject.count_product}</td>
                       <td>${eachProductObject.sale_price}</td>
                       <td>USD ${eachProductObject.sale_price*eachProductObject.count_product}</td>
                     </tr>
                  
                ))
                       
                }
              </table>
              </div>

              <div className="row">
                <h2>Savings</h2> <h6>USD ${savingFunction()}</h6>
              </div>

              <div className="row">
                <h2>Sub-Total</h2> <h6>USD$ {totalSumValue}</h6>
              </div>
              <div className="row">
                <h2>HST</h2> <h6>USD$ {totalSumValue*0.13}</h6>
              </div>
              <hr></hr>
              

              <div className="row">
                <h1>Total</h1> <h1>USD${totalSumValue*1.13}</h1>
              </div>



              <div className="check-out">
                <button className="checkout" onClick ={cardPayment}>
                  <i className="fa-regular fa-credit-card"></i>Checkout
                </button>
              </div>
            </div>
          </div>
          {/* <hr></hr> */}
        </div>





        <div>
          {SpecfiedAddress ? <div>
            <div className="abstractedAddress">
              <div className="mainColorDiv">
                <h3 className="titleStyling">Mailing Address</h3>
                <div >
                  <p className="fontAddress">Full Name:  <span className="spanStyling">{SpecfiedAddress.full_name}</span> </p>
                </div>
                <div>
                  <p className="fontAddress">Address Line 1: <span className="spanStyling">{SpecfiedAddress.address_line_1}</span></p>
                </div>
                <div>
                  <p className="fontAddress">Address Line 2:<span className="spanStyling"> {SpecfiedAddress.address_line_2}</span></p>
                </div>
                <div>
                  <p className="fontAddress">City Selected:<span className="spanStyling"> {SpecfiedAddress.city}</span></p>
                </div>
                <div>
                  <p className="fontAddress">State/Province/Region: <span className="spanStyling">{SpecfiedAddress.state_region}</span></p>
                </div>
                <div>
                  <p className="fontAddress">Country: <span className="spanStyling">{SpecfiedAddress.country}</span></p>
                </div>
                <div className="editDeleteSection">
                  <button className="paddingSpace" onClick={editAdderss}>Edit Address</button>
                  <button className="paddingSpace" onClick={deleteAddress}>Delete Address</button>
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
      <Footer />
    </div>
  );
}

export default Carts;
