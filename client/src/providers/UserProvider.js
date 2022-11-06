import React ,{ useState,createContext, useEffect} from "react";
import Cookies from 'universal-cookie';
import axios from "axios";
const cookies = new Cookies();
export const userContext = createContext();

export default function UserProvider(props) {
const [firstNameSaved, setFirstNameSaved] = useState(cookies.get('firstNameValue') ? cookies.get('firstNameValue'): "")
const [lastNameSaved, setLastNameSaved] = useState(cookies.get('lastNameValue') ? cookies.get('lastNameValue'): "")
const [emailSaved, setEmailSaved] = useState(cookies.get('emailValue') ? cookies.get('emailValue'): "")
const [savingStoreName, setSavingStoreName] = useState(cookies.get('storeName') ? cookies.get('storeName'): "")
const [userId, setUserId] = useState(0)
const [counterValue, setCounterValue] = useState(cookies.get('userId') ? cookies.get('userId'): 0);
const [storeIdNumber, setStoreIdNumber] = useState(cookies.get('storeId')? cookies.get('storeId'):0)
const [allTheStore, setAllTheStore] = useState('')
const [salesHistory, setSalesHistory] = useState([])
const [editProdObj, setEditProdObj] =useState(cookies.get('editProductObj')? cookies.get('editProductObj'):'')
const [fullAddressId, setFullAddressId] = useState()
const userIdValueNum = cookies.get('userId')
useEffect(() => {

    axios.post('http://localhost:8080/extratingData',{ userIdInt: userIdValueNum })
        .then(response => {
            console.log("DATA recieved from the database", response.data)
            setSalesHistory(response.data)
        })
        .catch((error) => {
        console.log('error received from the database', error)
            })
}, [])

const changinSalesHistory =  (newArray) =>{
    setSalesHistory([newArray])
    
}

const changingAddressId= (addressIdObject)=>{
    setFullAddressId(addressIdObject)
}





useEffect(() => {

    axios.get('http://localhost:8080/allStores')
        .then(response => {
            console.log('setAllTheStore',response.data)
            setAllTheStore(response.data)

        })
}, [])



const incrementFunction = function() {
    setCounterValue(counterValue + 1);
  };
  const decrementFunction = function() {
    setCounterValue(counterValue - 1);
  };
  const clearFunction = function() {
    setCounterValue(0);
  };
const settingCounter = function(counterValueChanging) {
    setCounterValue(counterValueChanging);
}

console.log("FirstNameSaved",firstNameSaved)
console.log("LastNameSaved",lastNameSaved)
console.log("EmailSaved",emailSaved)
const savingFirstName = (nameValue) =>{
    setFirstNameSaved(nameValue)
    console.log("FirstNameSaved :",nameValue)
}

const savingEmail = (email) =>{
    setEmailSaved(email)
    console.log("Email address :",email)
}

const savingLastName = (lastName) =>{
    setLastNameSaved(lastName)
    console.log("Email address :",lastName)
}

const savingUserId = (id) =>{
    setUserId(id)
    console.log("The userid for the logged in User is: ",id)
}

const savingStoreFunction = (store)=>{
    setSavingStoreName(store)
    console.log(savingStoreFunction)
}

const settingStoreIdValue = (id)=>{
    setStoreIdNumber(id)
    console.log(id)
}
const providerData = {fullAddressId, editProdObj,salesHistory, allTheStore, storeIdNumber, firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId,changingAddressId,settingStoreIdValue ,changinSalesHistory, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction,settingCounter}
return(
    <userContext.Provider value ={providerData}>
        {props.children}
    </userContext.Provider>
)
};


