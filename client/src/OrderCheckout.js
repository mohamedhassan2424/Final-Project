import React, {useEffect, useState} from "react";
import Nav from "./Nav";

function OrderCheckout(){
    const [addressLineOne,setAddressLineOne] = useState('')
    const [addressLineTwo,setAddressLineTwo] = useState('')
    const [cityAddress,setCityAddress] = useState('')
    const [stateRegion,setStateRegion] = useState('')
    const[postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const registerAddress = ()=>{
        
    }
    return (
<div>
    <Nav />
    <h1>Welcome to the OrderCheckout Page</h1>
    <form onSubmit={(event) => event.preventDefault()} >
            <h1 className ="fontName">Mailing Addres</h1><br />

            <div className ="inputText">
                    <input value={addressLineOne} type = "text" placeholder="Address Line 1" onChange={(event)=> {
                setAddressLineOne(event.target.value)
                console.log(addressLineOne)
}} />
                </div>

                <div className ="inputText">
                    <input value={addressLineOne} type = "text" placeholder="Address Line 1" onChange={(event)=> {
                setAddressLineTwo(event.target.value)
                console.log(addressLineTwo)
}} />
                </div>

                <div className ="inputText">
                    <input value={addressLineTwo} type = "text" placeholder="City" onChange={(event)=> {
                setAddressLineTwo(event.target.value)
                console.log(addressLineTwo)
}} />
                </div>

                <div className ="inputText">
                    <input value={cityAddress} type = "text" placeholder="State/Province/Region" onChange={(event)=> {
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
</div>
    )
}

export default OrderCheckout;