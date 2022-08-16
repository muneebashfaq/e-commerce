
import Button from '../../routes/form-input/button';
import {Cart_dropdown,Cart_items,EmptyMessage} from './cart-dropdown.styles';
import { useContext } from 'react';
import { CartContext } from '../Context/Cart.context';
import Cart_Item from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
const CartDropdown = () => {
  const {carItems}= useContext(CartContext)
  const navigate = useNavigate()
  const GoToCheckout=()=>{
    navigate('/checkout')
  }
return(
  <Cart_dropdown>
     <Cart_items>
    {carItems.length?(carItems.map((cartitem)=>{
  return  <Cart_Item key ={cartitem.id} cartitem={cartitem}/>
      }))
      :(<EmptyMessage>Your Cart Is Empty</EmptyMessage>)}
       </Cart_items>
    <Button onClick={GoToCheckout}>GO To CHECKOUT</Button>
             
  </Cart_dropdown>
)};

export default CartDropdown;

