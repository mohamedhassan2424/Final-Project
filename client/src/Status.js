
import Nav from "./Nav";
import Footer from "./Footer";
import './recipet.css'
import React, {useState, useEffect} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import statusImage from './Imagesss/Screenshot 2022-11-08 at 11.07.20 AM.png'
function Status(){

    const cookies = new Cookies();
    let currentUserId = cookies.get('userId')
    const [allSalesHistoryRecipet, setAllSalesHistoryRecipet] = useState([])
    const [specficAddress, setSpecficAddress] = useState([])
    useEffect(() => {

        axios.post('http://localhost:8080/allSalesHistory', { userIdInt: currentUserId })
          .then(response => {
            console.log("DATA recieved from the database", response.data)
            setAllSalesHistoryRecipet(response.data)
    
          })
          .catch((error) => {
            console.log('error received from the database', error)
          })
      }, [])

      useEffect(() => {

        axios.post('http://localhost:8080/gettingAddressId', { userIdInt: currentUserId })
          .then(response => {
            console.log("DATA recieved from the database", response.data)
            setSpecficAddress(response.data[0])
    
          })
          .catch((error) => {
            console.log('error received from the database', error)
          })
      }, [])


      console.log('allSalesHistoryRecipet',allSalesHistoryRecipet)
      console.log('specficAddress',specficAddress)

      const totalSumFunction = ()=>{
        let totalSumValue= 0
        for(let i=0; i<allSalesHistoryRecipet.length; i++){
            const totalPrice = allSalesHistoryRecipet[i].price
            const totalQuantity= allSalesHistoryRecipet[i].count_product
            totalSumValue +=totalPrice*totalQuantity;
        }
        return Math.ceil(totalSumValue*100)/100
    }
    const totalSumValue = totalSumFunction()
    const hstTotalValue = (totalSumValue*1.13).toFixed(2)
    
      return (
        <div>
            <div className="marginSpacing">
            <Nav />
            <h1>Welcome to the Status page</h1>
            <div className ="MainContainerReceipt">
            <div className="headerStatment">
        <div className="contentofheader">
        <div className="reciptId"><h2 >RECEIPT</h2></div>
        <div> <h2> ORDER # JF34RE67-SK</h2></div>
        </div>
        </div>
<div className="mainBody">
<div className="bodyInformation">
<div>
    <h1>Billing INFO</h1>
    <br></br>
    <p>{specficAddress.address_line_1}</p>
    <p>{specficAddress.address_line_2}</p>
    <p>{specficAddress.city}, {specficAddress.state_region}</p>
    <p>{specficAddress.country}</p>
    <br></br>
    <p>VISA Ending in 4242</p>
    <p>Nov 4, 2017 09:423</p>
</div>
<div>
   <h2> Order Summary</h2>
    <br></br>
    

<div className= "orderSumDiv">
<div className="productName">
{allSalesHistoryRecipet && allSalesHistoryRecipet.map((eachSalesProduct)=>(
<p>{eachSalesProduct.product_name} </p>
 ))
}

<br></br>
<p>Subtotal:</p>
<p>Tax:</p>
<p>Total: </p>
</div>
<div>
{allSalesHistoryRecipet && allSalesHistoryRecipet.map((eachSalesProduct)=>(
<p> ${eachSalesProduct.price} </p>
 ))
}
<br></br>
<p>${totalSumValue}</p>
<p>${(totalSumValue *0.13).toFixed(2)}</p>
<p>${hstTotalValue}</p>

</div>
</div>
   


</div>
</div>
</div>

<div className="footer">
        <div className="footerHeader">
        <div className="reciptId"><h1 >Tracking</h1></div>
        <div> <h2> ORDER # JF34RE67-01</h2></div>
        </div>
        <div className="imageSection">
        <div>
            <img  className="timeLineImage"src={statusImage}></img>
        </div>
        <div className= "orderStatus">
            <div>Ordered
            <p>Nov 9</p>

            </div>
            <div className='shippedValue'>Shipped 
            <p>Nov 9</p>
            </div>
            <div>Estimated Delivery
            <p>Nov 9</p>
            </div>
        </div>
        </div>
        </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Status;




