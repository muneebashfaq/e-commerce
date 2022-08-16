import { useState,useContext } from "react"
import {createuserwithemailandpassword,createuserdocument} from '../../utlis/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component"
import './sign-up-styles.scss'
import Button from "../form-input/button"

const credtials = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:'',
}
const Sign_Up = () => {
    const [handleform, sethandleform] = useState(credtials)
  const {displayName,email,password,confirmPassword} = handleform
  
    const handleChange = (e) => {

    sethandleform({...handleform,[e.target.name]:e.target.value})
    }
    const handleSubmit=async (e)=>{
    e.preventDefault()

    if(password!=confirmPassword){
        alert("password and confirm password not matches")
        return
    }
try{
     const {user} = await createuserwithemailandpassword(email,password)
     await createuserdocument(user,{displayName})
     sethandleform(credtials)

}catch(error){
    if(error.code == "auth/email-already-in-use"){
        alert("cannot create user email already in use")
    }
console.log(error)
}
    }
    return (<>
    <div className="sign-up-container">
    <h2>Don't Have An Account</h2>
    <span>SignUp With Your Email And Password</span>
        <form onSubmit={handleSubmit}>    
            <FormInput label="Name:"
            inputoption={{
            type:"text",
            required:true, 
            name:"displayName", 
            onChange:handleChange,
            value:displayName,
            }} />

             <FormInput label="Email:"
            inputoption={{
            type:"email",
            required:true, 
            name:"email", 
            onChange:handleChange,
            value:email,
            }} />

              <FormInput label="Password:"
            inputoption={{
            type:"password",
            required:true, 
            name:"password", 
            onChange:handleChange,
            value:password,
            }} />
    
            <FormInput label="Confirm Password:"
            inputoption={{
            type:"password",
            required:true, 
            name:"confirmPassword", 
            onChange:handleChange,
            value:confirmPassword,
            }} />
            <Button  type="submit">Sign Up</Button>
        </form>
        </div>
    </>)
}

export default Sign_Up