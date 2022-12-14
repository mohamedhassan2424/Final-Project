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
    const cookies = new Cookies();
    const history = useHistory();
  const { fullAddressId, editProdObj, salesHistory, allTheStore, storeIdNumber, firstNameSaved, lastNameSaved, emailSaved, savingStoreName, counterValue, userId, changingAddressId, settingStoreIdValue, changinSalesHistory, savingFirstName, savingLastName, savingEmail, savingUserId, savingStoreFunction, incrementFunction, decrementFunction, clearFunction, settingCounter } = useContext(userContext)
  let SpecfiedAddress = cookies.get("specfiedAddressId")
  const [addressLineOneUpdate, setAddressLineOneUpdate] = useState(SpecfiedAddress.address_line_1)
  const [addressLineTwoUpdate, setAddressLineTwoUpdate] = useState(SpecfiedAddress.address_line_2)
  const [cityAddressUpdate, setCityAddressUpdate] = useState(SpecfiedAddress.city)
  const [stateRegionUpdate, setStateRegionUpdate] = useState(SpecfiedAddress.state_region)
  const [postalCodeUpdate, setPostalCodeUpdate] = useState(SpecfiedAddress.zip_code)
  const [countryUpdate, setCountryUpdate] = useState(SpecfiedAddress.country)
  const [allAddress, setAllAddress] = useState([])
  const [productOrdered, setProductOrdered] = useState([])
  
  const linkServer = "http://localhost:8080/"
  let currentUserId = cookies.get('userId')
  let firstNameVal = cookies.get('firstNameValue')
  let lastNameVal = cookies.get('lastNameValue')


  let fullName = firstNameVal + " " + lastNameVal;
  console.log("fullName", fullName)
  console.log("currentUserId", currentUserId)





  const registerAddressUpdate = () => {
    console.log("check point one")
    console.log('addressLineOne', addressLineOneUpdate)
    console.log('addressLineTwo', addressLineTwoUpdate)
    console.log('cityAddress', cityAddressUpdate)
    console.log('stateRegion', stateRegionUpdate)
    console.log('postalCode', postalCodeUpdate)
    console.log('country', countryUpdate)

    axios.post(`${linkServer}reigisterAddressUpdate`, { currentUserId, addressLineOneUpdate, addressLineTwoUpdate, cityAddressUpdate, stateRegionUpdate, postalCodeUpdate, countryUpdate })
      .then((response) => {
        console.log("Data Saved")
              let path = `/cart`;
        history.push(path);

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



console.log('SpecfiedAddress',SpecfiedAddress)
console.log('allAddress',allAddress)
console.log('addressLineOneeee',addressLineOneUpdate)

console.log('addressLineTwo',addressLineTwoUpdate)
  return (
    <div>
      <Nav />
      <div className="background-image">
        <div>
          <div className="addressSec">
              <div className="AddresssSection">

                <form onSubmit={(event) => event.preventDefault()} >
                  <h1 className="fontName">Mailing Addresss</h1><br />

                  <div className="inputText">
                    <input value={addressLineOneUpdate} type="text" placeholder="Address Line 1" onChange={(event) => {
                      setAddressLineOneUpdate(event.target.value)
                      console.log(addressLineOneUpdate)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={addressLineTwoUpdate} type="text" placeholder="Address Line 1" onChange={(event) => {
                      setAddressLineTwoUpdate(event.target.value)
                      console.log(addressLineTwoUpdate)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={SpecfiedAddress.city} type="text" placeholder="City Name" onChange={(event) => {
                      setCityAddressUpdate(event.target.value)
                      console.log(cityAddressUpdate)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={stateRegionUpdate} type="text" placeholder="State/Province/Region" onChange={(event) => {
                      setStateRegionUpdate(event.target.value)
                      console.log(stateRegionUpdate)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={postalCodeUpdate} type="text" placeholder="ZIP/Postal Code" onChange={(event) => {
                      setPostalCodeUpdate(event.target.value)
                      console.log(postalCodeUpdate)
                    }} />
                  </div>

                  <div className="inputText">
                    <input value={countryUpdate} type="text" placeholder="Country:" onChange={(event) => {
                      setCountryUpdate(event.target.value)
                      console.log(countryUpdate)
                    }} />
                  </div>

                  <button class="othersumbitButton" type="sumbit" onClick={registerAddressUpdate}>Signup</button>

                </form>
              </div>
            </div>
        </div>



      </div>
      <Footer />
    </div>
  );
}

export default Carts;