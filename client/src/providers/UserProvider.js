import React ,{ useState,createContext} from "react";

export const userContext = createContext();

export default function UserProvider(props) {
const [firstNameSaved, setFirstNameSaved] = useState('')
const [lastNameSaved, setLastNameSaved] = useState('')
const [emailSaved, setEmailSaved] = useState('')

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

const providerData = {firstNameSaved,lastNameSaved,emailSaved ,savingFirstName,savingLastName,savingEmail }
return(
    <userContext.Provider value ={providerData}>
        {props.children}
    </userContext.Provider>
)
};


