import './button.styles.scss'
const BUTTON_CLASS_TYPE={
    google:"google-sign-in",
    inverted:"inverted"
}
const Button =({buttontype,...otherprops})=>{

    return(<>
    <button className={`button-container ${BUTTON_CLASS_TYPE[buttontype]}`} {...otherprops}  />
    </>)
}
export default Button