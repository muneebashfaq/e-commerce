import { useState } from "react"
import {signinwithpopup,signinuserwithemailandpassword} from '../../utlis/firebase/firebase.utils'
import FormInput from "../form-input/form-input.component"
import './sign-in-styles.scss'
import Button from "../form-input/button"

const credtials = {
    email: '',
    password:'',  
}

const Sign_In = () => {
    const [handleform, sethandleform] = useState(credtials)
  const {displayName,email,password,confirmPassword} = handleform


    const googleauth = async ()=>{
        await signinwithpopup();
        
    }
    const handleChange = (e) => {

    sethandleform({...handleform,[e.target.name]:e.target.value})
    }
    const handleSubmit=async (e)=>{
    e.preventDefault()

  
try{
   const {user} = await signinuserwithemailandpassword(email,password)
 
   sethandleform(credtials)
}catch(error){
 switch (error.code){
    case "auth/wrong-password":
        alert("wrong password try with correct password")
        break
    case "auth/user-not-found":
        alert("wrong email try with correct email")
        break
    default:
        console.log(error)
 }
 console.log(error)
    }}
    return (<>
    <div className="sign-up-container">
    <h2> Have An Account</h2>
    <span>Sign In With Your Email And Password</span>
        <form onSubmit={handleSubmit}>    
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
<div className="button-containers">
            <Button  type="submit">Sign In</Button>

            <Button  type="button" buttontype={"google"}
            onClick={googleauth} >Google Sign In</Button>
            </div>
           
        </form>
        </div>
    </>)

}
export default Sign_In