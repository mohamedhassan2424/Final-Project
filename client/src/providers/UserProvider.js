import React ,{ useState,createContext} from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const userContext = createContext();

export default function UserProvider(props) {
const [firstNameSaved, setFirstNameSaved] = useState(cookies.get('firstNameValue') ? cookies.get('firstNameValue'): "")
const [lastNameSaved, setLastNameSaved] = useState(cookies.get('lastNameValue') ? cookies.get('lastNameValue'): "")
const [emailSaved, setEmailSaved] = useState(cookies.get('emailValue') ? cookies.get('emailValue'): "")
const [counterValue, setCounterValue] = useState(0)

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

const counterIncrement = ()=>{
    setCounterValue(counterValue+1)
}
const counterDecrement = ()=>{
    setCounterValue(counterValue+1)
}

const clearCounter = ()=>{
    setCounterValue(0)
}


const providerData = {firstNameSaved,lastNameSaved,emailSaved,counterValue ,counterIncrement, counterDecrement,clearCounter, savingFirstName,savingLastName,savingEmail }
return(
    <userContext.Provider value ={providerData}>
        {props.children}
    </userContext.Provider>
)
};


