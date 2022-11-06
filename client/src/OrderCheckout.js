import axios from "axios";
import React, {useEffect, useState} from "react";
import { useContext } from "react";
import UserProvider, { userContext } from "./providers/UserProvider";
import Nav from "./Nav";
import Cookies from 'universal-cookie';

function OrderCheckout(){
    const {fullAddressId, editProdObj,salesHistory, allTheStore, storeIdNumber, firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId,changingAddressId,settingStoreIdValue ,changinSalesHistory, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction,settingCounter} = useContext(userContext) 
   
    const [addressLineOne,setAddressLineOne] = useState('')
    const [addressLineTwo,setAddressLineTwo] = useState('')
    const [cityAddress,setCityAddress] = useState('')
    const [stateRegion,setStateRegion] = useState('')
    const[postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')
    const [allAddress, setAllAddress] = useState([])
    const cookies = new Cookies();
    const linkServer = "http://localhost:8080/"
    let currentUserId = cookies.get('userId')
    let firstNameVal = cookies.get('firstNameValue')
    let lastNameVal = cookies.get('lastNameValue')

    let fullName = firstNameVal + " " +lastNameVal;
    console.log("fullName",fullName)
    console.log("currentUserId",currentUserId)





    const registerAddress = ()=>{
        console.log("check point one")
        console.log('addressLineOne',addressLineOne)
        console.log('addressLineTwo',addressLineTwo)
        console.log('cityAddress',cityAddress)
        console.log('stateRegion',stateRegion)
        console.log('postalCode',postalCode)
        console.log('country',country)

        axios.post(`${linkServer}reigisterAddress`,{currentUserId,fullName, addressLineOne, addressLineTwo, cityAddress, stateRegion,postalCode, country})
        .then((response)=>{
            console.log("Data Saved")
            window.location.reload(false)
        })

    }

    useEffect(() => {

        axios.get('http://localhost:8080/gettingAddress')
            .then(response => {
                console.log("gettingadddressData",response.data)
                setAllAddress(response.data)
            })
    }, [])

         const specfiedAddress = allAddress.map((eachAddressObject) => {
            let currentUserId = cookies.get('userId')
            console.log('currentUserId',currentUserId)
            console.log('eachAddressObject',eachAddressObject)
                    if(eachAddressObject.user_id_address === Number(currentUserId)){
                        console.log('SpecfifedAddressObject',eachAddressObject)
                        cookies.set("specfiedAddressId",eachAddressObject)
                    }
                })
                const SpecfiedAddress = cookies.get("specfiedAddressId")
                console.log("specfifedAddresss",SpecfiedAddress)
    return (
<div>
    <Nav />
    <h1>Welcome to the OrderCheckout Page</h1>
    {SpecfiedAddress ?<div>
        <h5>Full Name :{SpecfiedAddress.full_name}</h5>
        <h5>Address Line 1 :{SpecfiedAddress.address_line_1}</h5>
        <h5>Address Line 2 :{SpecfiedAddress.address_line_2}</h5>
        <h5>City Selected :{SpecfiedAddress.city}</h5>
        <h5>State/Province/Region :{SpecfiedAddress.state_region}</h5>
        <h5>Country:{SpecfiedAddress.country}</h5>
    </div>
    
    
    
    
    :<div className="AddresssSection">
    <form onSubmit={(event) => event.preventDefault()} >
            <h1 className ="fontName">Mailing Addres</h1><br />

            <div className ="inputText">
                    <input value={addressLineOne} type = "text" placeholder="Address Line 1" onChange={(event)=> {
                setAddressLineOne(event.target.value)
                console.log(addressLineOne)
}} />
                </div>

                <div className ="inputText">
                    <input value={addressLineTwo} type = "text" placeholder="Address Line 1" onChange={(event)=> {
                setAddressLineTwo(event.target.value)
                console.log(addressLineTwo)
}} />
                </div>

                <div className ="inputText">
                    <input value={cityAddress} type = "text" placeholder="City Name" onChange={(event)=> {
                setCityAddress(event.target.value)
                console.log(cityAddress)
}} />
                </div>

                <div className ="inputText">
                    <input value={stateRegion} type = "text" placeholder="State/Province/Region" onChange={(event)=> {
                setStateRegion(event.target.value)
                console.log(stateRegion)
}} />
  </div>

  <div className ="inputText">
                    <input value={postalCode} type = "text" placeholder="ZIP/Postal Code" onChange={(event)=> {
                setPostalCode(event.target.value)
                console.log(postalCode)
}} />
                </div>

                <div className ="inputText">
                    <input value={country} type = "text" placeholder="Country:" onChange={(event)=> {
                setCountry(event.target.value)
                console.log(country)
}} />
                </div>
                <button class="sumbitButton" type="sumbit" onClick={registerAddress}>Signup</button>
            </form>
            </div>}

   
</div>
    )
}

export default OrderCheckout;