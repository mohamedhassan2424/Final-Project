import React ,{ useState,createContext} from "react";

export const userContext = createContext();

export default function UserProvider(props) {
const [userName, setUserName] = useState('')
const [emailSaved, setEmailSaved] = useState('')

const changingUsername = (nameValue) =>{
    setUserName(nameValue)
    console.log("Username Value Email :",nameValue)
}

const savingEmail

const providerData = {userName,changingUsername }
return(
    <userContext.Provider value ={providerData}>
        {props.children}
    </userContext.Provider>
)
};


