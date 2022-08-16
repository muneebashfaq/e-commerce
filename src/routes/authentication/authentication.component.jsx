
import Sign_Up from "../sign-up/sign-up.component";
import Sign_In from "../sign-in/sign-in.component";
import './authentication.styles.scss'
const Authentication=()=>{

 return(<>
 <div className="authentication-container">
<Sign_In/>
 <Sign_Up/>
 </div>
 </>)
}

export default Authentication