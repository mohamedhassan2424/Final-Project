import react from 'react'
import { useContext } from "react";
import { userContext } from "./providers/UserProvider";
import Cookies from 'universal-cookie';

import Nav from './Nav'
function EditProduct(props) {
    const cookies = new Cookies();
    const {editProdObj,salesHistory, allTheStore, storeIdNumber, firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId,settingStoreIdValue ,changinSalesHistory, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction} = useContext(userContext)
    const editProduct = cookies.get('editProductObj')
    console.log('editProduct',editProduct)
    console.log("stateCookie",editProdObj)
    return (
        <div>
            <Nav />
            <h1>Welcome to Edit Product</h1>
        </div>
    )
}


export default EditProduct