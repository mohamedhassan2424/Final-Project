import react from 'react'
import { useContext, useState } from "react";
import { userContext } from "./providers/UserProvider";
import Cookies from 'universal-cookie';
import axios from 'axios';
import Nav from './Nav'
function EditProduct(props) {
    const linkServer = "http://localhost:8080/"
    const cookies = new Cookies();
    const {editProdObj,salesHistory, allTheStore, storeIdNumber, firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId,settingStoreIdValue ,changinSalesHistory, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction,settingCounter} = useContext(userContext)
    const editProduct = cookies.get('editProductObj')
    const [counterUpdate, setCounterUpdate] = useState(editProduct.count_product)
    // settingCounter(editProduct.count_product)
    


    console.log('editProduct',editProduct)
    console.log("stateCookie",editProdObj)
    const UpdateFunction = ()=>{
        console.log('CounterValueData',counterUpdate)
        axios.post(`${linkServer}updateingSaleCount`, { productId: editProduct.id, userId: editProduct.user_id_sales, storeId: editProduct.stores_id_sales, counterData:counterUpdate})
    }

    const DeleteFunction = ()=>{

    }

    const incrementFunctions = ()=>{
        console.log("hitting here increment func")
        setCounterUpdate(counterUpdate + 1)
    }
    const decrementFunctions = ()=>{
        console.log("hitting here increment func")
        setCounterUpdate(counterUpdate - 1)
    }

    return (
        <div>
            <Nav />
            <h1>The store Selected : {editProduct.store_name}</h1>
            <h1>
                The product component which was clicked on was {editProduct.products_id}
            </h1>
            <h2>Confirm to add this product to your Cart</h2>




            <div className="outlineBox">
                <div className="outerTopProduCtontainer">
                    <div className="toptopheaderName">
                        <div>
                            <div className="topheaderName">
                                Featured
                            </div>
                        </div>
                        <div>
                            Counter :
                            <button className="incrementDecrementButton" onClick={incrementFunctions}>+</button>
                            <span>{counterUpdate}</span>
                            <button className="incrementDecrementButton" onClick={decrementFunctions}>-</button>
            
                        </div>
                    </div>
                    <div className="chocalteImage">
                        <img src={editProduct.product_url} />
                    </div>
                    <hr></hr>
                    <div className="ProductInforamtion">
                    {editProduct.product_name} 
                    </div>

                    <div className="saleImage">
                        <img src="https://cdn-icons-png.flaticon.com/512/3600/3600488.png" /><h4 className="saleDescription">SALE</h4>
                    </div>
                    <hr></hr>
                    <div className="caloriesDescription">
                        {/* <Link to={`/products/${product.id}`}> {product.product_description}</Link> */}
                    </div>
                    <div className="priceInformation">
                        <span className="firstPrice">${editProduct.price}</span> <span className="secoundPrice">          ${editProduct.sale_price}</span>
                    </div>
                    <div >
                        <button className="addContent" onClick={UpdateFunction}><h3>Confirm to Update Product</h3></button>
                        <button className="addContent" onClick={DeleteFunction}><h3>Delete Product</h3></button>
                    </div>

                </div>
            </div>




        </div>
    )
}


export default EditProduct