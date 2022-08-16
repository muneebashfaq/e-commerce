
import {Cart_Icon_Container,Shoping_icon,Item_Count} from './cart-icon.styles'
import { useContext } from 'react'
import { CartContext } from '../Context/Cart.context'

const CartIcon = ()=>{
    const {CountItem}= useContext(CartContext)
    const {iscartopen,setiscartopen} =  useContext(CartContext)
    return(<>
    <Cart_Icon_Container onClick={()=>{setiscartopen(!iscartopen)}}>
        <Shoping_icon/>
<Item_Count>{CountItem}</Item_Count>
    </Cart_Icon_Container>
    </>)
}

export default CartIcon