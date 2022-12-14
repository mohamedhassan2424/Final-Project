import React, { useState, useEffect } from "react"
import "./styles.css"
import  axios  from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import useVerification from "./hooks/useVerification";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { useContext } from "react";

import { userContext } from "./providers/UserProvider";
import Cookies from 'universal-cookie';


 

function Users(props) {
    const {firstNameSaved,lastNameSaved,emailSaved ,savingStoreName,counterValue,userId, savingFirstName,savingLastName,savingEmail ,savingUserId ,savingStoreFunction ,incrementFunction ,decrementFunction,clearFunction} = useContext(userContext)
    // const {buttonState, firstName, lastName,emailName,passwordName , otherpasswordName, emailDatabase, passwordDatabase ,wrongPasswordComment ,addingClass, removingClass, logInButton, register } = useVerification();
const [buttonState,setButtonState] = useState(false)
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [emailName, setEmailName] = useState('')
const [passwordName, setPasswordName] = useState('')
const [otherpasswordName, setOtherpasswordName] = useState('')
const [emailDatabase, setEmailDatabase] = useState('')
const [passwordDatabase, setPasswordDatabase] = useState('')
const [wrongPasswordComment, setWrongPasswordComment]= useState(false)
const [existingEmail, setExistingEmail]= useState(false)
const [allUsersInformation, setAllUsersInformation] = useState([])
const history = useHistory();
const cookies = new Cookies();

const linkServer = "http://localhost:8080/"
useEffect(() => {

    axios.get('http://localhost:8080/content')
        .then(response => {
            console.log(response.data)
            setAllUsersInformation(response.data)
        })
}, [])
console.log("allUsersInformation",allUsersInformation)

const register = ()=> {
    console.log("Check point one")

    const newArrayFiltered = allUsersInformation.filter((eachObject) => {
        if(eachObject.email === emailName){
            console.log("email is the same")
            console.log(emailName)
            return true;
        }else{
            console.log('Email doesnt exisit')
            console.log(emailName)
            return false;
        }}
    )
    console.log(newArrayFiltered)
   
    if(newArrayFiltered.length > 0){
        console.log("Email already exists")
        setExistingEmail(true)
    } else {
        console.log("Email doesn't exists your good to sign in")
        axios.post(`${linkServer}reigister`,{firstName, lastName, email:emailName, password:passwordName})
        .then((response)=>{
            const newArrayFiltered = allUsersInformation.slice(-1)
            console.log("newArrayFiltered",newArrayFiltered)
            const convertToNumber = Number(newArrayFiltered[0].id)
            console.log('convertToNumber',convertToNumber)
            const userIdValue = convertToNumber +1;
            console.log('userIdValue ',userIdValue)
            cookies.set('userId',`${userIdValue}`)
    
            cookies.set('emailValue',`${emailName}`)
            cookies.set('firstNameValue',`${firstName}`)
            cookies.set('lastNameValue',`${lastName}`)
            savingEmail(emailName)
            savingFirstName(firstName)
            savingLastName(lastName)
            console.log(cookies.get('emailValue'))
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

            const newArrayFiltered = allUsersInformation.filter((eachObject) => {
                if(eachObject.email === emailDatabase){
                    console.log("The whole Object of that email",eachObject)
                    savingUserId(eachObject.id)
                    savingEmail(emailDatabase)
                    savingFirstName(eachObject.firstname)
                    savingLastName(eachObject.lastname)
                    cookies.set('userId',`${eachObject.id}`)
                    cookies.set('emailValue',`${emailDatabase}`)
                    cookies.set('firstNameValue',`${eachObject.firstname}`)
                    cookies.set('lastNameValue',`${eachObject.lastname}`)
                    console.log("The whole Object of that email",eachObject)
                    return eachObject
                }}
            )

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



    return (
        <section>
            <Nav />
            {/* <h1>Connected to the User page</h1> */}
            <div className='bigContainer'>
                <div className="formContainer" >
<div className ="allButtons">
    <button className="eachButton" onClick = {removingClass} >Signup</button>
    <button className="eachButton" onClick = {addingClass} >Login</button>
    <button className={buttonState ? "moveButtonState RightButton": "moveButtonState"}>{buttonState ? "Login": "Signup"}</button>
</div>
            <form onSubmit={(event) => event.preventDefault()} class={buttonState ? "form": "form signupForm"}>
            <h1 className ="fontName">Create a LiteCart Account!</h1><br />
           

                <div className ="inputText">
                    <input value={firstName} type = "text" placeholder="First Name" onChange={(event)=> {
                setFirstName(event.target.value)
                console.log(firstName)
}} />
                </div>
                <div className ="inputText">
                    <input value={lastName} type = "text" placeholder="Last Name"  onChange={(event)=> {
                setLastName(event.target.value)
                console.log(lastName)
}}/>
                </div>
                <div className ="inputText">
                    <input value={emailName} type = "email" placeholder="Email" onChange={(event)=> {
                setEmailName(event.target.value)
                console.log(emailName)
}}/>
                </div>
                <div className ="inputText">
                    <input value={passwordName} type = "password" placeholder="Password" onChange={(event)=> {
                setPasswordName(event.target.value)
                
                console.log(passwordName)
}}/>
                </div>
                <div className ="inputText">
                    <input value={otherpasswordName} type = "password" placeholder="Confirm Password" onChange={(event)=> {
                setOtherpasswordName(event.target.value)
                console.log(firstName)
}} />
                </div>
                <div className= "sumbitButtonCenter">
                <button class="sumbitButton" type="sumbit" onClick={register}>Signup</button>
                </div>
                <h3 className = {existingEmail?"emailConfirmationShow" : "emailConfirmationNotShow"}>The email you typed in doesn't exist</h3>
                <h3 className = {existingEmail?"emailConfirmationShow" : "emailConfirmationNotShow"}>Please type in a Different email</h3>
        
            </form>
            <form onSubmit={(event) => event.preventDefault()}  className={buttonState ? "form loginForm": "form"}>
                <div className ="inputText">
                    <input type = "email" placeholder="Email" onChange={(event)=> {
                setEmailDatabase(event.target.value)
                console.log(emailDatabase)
}}/>
                </div>
                <div className ="inputText">
                    <input type = "password" placeholder="Create New Password" onChange={(event)=> {
                setPasswordDatabase(event.target.value)
                console.log(passwordDatabase)
}}/>
                </div>
                <div className= "sumbitButtonCenter">
                <button className="sumbitButton" type="sumbit" onClick = {logInButton}>Login</button>
                </div>
                <h4 className ={wrongPasswordComment ? "loginConfirmationShow" :"loginConfirmationNotShow" }>Incorrect Email or Password Typed In. </h4>
                <h4 className ={wrongPasswordComment ? "loginConfirmationShow" :"loginConfirmationNotShow" }>Please Try Again. </h4>
            </form>
            </div>
            </div>
            <Footer />
        </section>

    );
}

export default Users;