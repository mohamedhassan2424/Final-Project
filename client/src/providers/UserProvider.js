import React ,{ useState,createContext} from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const userContext = createContext();

export default function UserProvider(props) {
const [firstNameSaved, setFirstNameSaved] = useState(cookies.get('firstNameValue') ? cookies.get('firstNameValue'): "")
const [lastNameSaved, setLastNameSaved] = useState(cookies.get('lastNameValue') ? cookies.get('lastNameValue'): "")
const [emailSaved, setEmailSaved] = useState(cookies.get('emailValue') ? cookies.get('emailValue'): "")
const [savingStoreName, setSavingStoreName] = useState(cookies.get('storeName') ? cookies.get('storeName'): "")
const [userId, setUserId] = useState(0)
const [counterValue, setCounterValue] = useState(cookies.get('userId') ? cookies.get('userId'): 0);
const [storeIdNumber, setStoreIdNumber] = useState('')

const incrementFunction = function() {
    setCounterValue(counterValue + 1);
  };
  const decrementFunction = function() {
    setCounterValue(counterValue - 1);
  };
  const clearFunction = function() {
    setCounterValue(0);
  };


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
const providerData = {firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction}
return(
    <userContext.Provider value ={providerData}>
        {props.children}
    </userContext.Provider>
)
};


