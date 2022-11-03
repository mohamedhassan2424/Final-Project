
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import "../styles.css"
import axios from "axios";
const useVerification = function() {
    
    const [buttonState,setButtonState] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailName, setEmailName] = useState('')
    const [passwordName, setPasswordName] = useState('')
    const [otherpasswordName, setOtherpasswordName] = useState('')
    const [emailDatabase, setEmailDatabase] = useState('')
    const [passwordDatabase, setPasswordDatabase] = useState('')
    const [wrongPasswordComment, setWrongPasswordComment]= useState(false)
    const history = useHistory();
    
    const linkServer = "http://localhost:8080/"
    
    const register = ()=> {
        console.log("Check point one")
        axios.post(`${linkServer}reigister`,{firstName, lastName, email:emailName, password:passwordName})
        .then((response)=>{
            console.log("Gotten to this part",response.data)
            setFirstName('')
            setLastName('')
            setEmailName('')
            setPasswordName('')
            setOtherpasswordName('')
    
            let path = `/home`;
            // let history = useHistory();
            history.push(path);
    
        })
        .catch((error)=>{
            console.log(error)
        })
    
    console.log("Checkpoint 2")
       
    
    
      console.log("Checkpoint 3")
            
     
    console.log("Checkpoint 4")
    
    }

    const logInButton = () =>{
        axios.post(`${linkServer}login`,{email:emailDatabase, password:passwordDatabase})
        .then((response)=>{
            
            console.log("Gotten to this part, data response :",response.data)
            setFirstName('')
            setLastName('')
            setEmailName('')
            setPasswordName('')
            setOtherpasswordName('')
    
    
    
    
            console.log(response.data)
            if(response.data !== "Incorrect email and Password") {
               let path = `/home`;
          
                history.push(path);
            } else{
                console.log("Wrong password")
                setWrongPasswordComment(true)
            }
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const addingClass = ()=>{
        console.log("hello word")
        //let buttonClass = classNames("moveButtonState RightButton")
        setButtonState(true)
        
    }
    const removingClass = ()=>{
        console.log("hello word")
        //let buttonClass = classNames("moveButtonState")
        setButtonState(false)
    }

    return {buttonState, firstName, lastName,emailName,passwordName , otherpasswordName, emailDatabase, passwordDatabase ,wrongPasswordComment ,addingClass, removingClass, logInButton, register }
}




export default useVerification;