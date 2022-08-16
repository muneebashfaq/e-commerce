import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import {Navigations,Logo_Container,NavLink_Container,Navlink} from './navigation.styles'
import { ReactComponent as Crown } from '../../assets/crown.svg'
import { UserContext } from "../../components/Context/User.context"
import { CartContext } from "../../components/Context/Cart.context"
import { useContext } from "react"
import { signout } from "../../utlis/firebase/firebase.utils"
import CartIcon from "../../components/cart-icon/CartIcon.component"
import CartDropdown from "../../components/cart-dropdown/Cart-Dropdown"

const Navigation = () => {
    const {CurrentUser} = useContext(UserContext)
    const {iscartopen} =useContext(CartContext)
    return (<>
        <Navigations>
            <Logo_Container to="/">
                <Crown className="logo" />
            </Logo_Container>
            <NavLink_Container>
                {CurrentUser?<Navlink as='span' onClick={signout} >SignOut</Navlink>:<Navlink className="nav-link" to="/auth">Sign In
                </Navlink>}
                <Navlink className="nav-link" to="/shop">Shop
                </Navlink>
               <CartIcon/>
            </NavLink_Container>
            {iscartopen && <CartDropdown/>}
        </Navigations>
        <Outlet />
    </>)
}
export default Navigation