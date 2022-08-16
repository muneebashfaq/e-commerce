import { useContext } from 'react';
import { CartContext } from '../Context/Cart.context';
import './checkout.styles.scss'
import Checkout_item from '../checkout-items/checkout-items.components';
const Checkout = ()=>{
    const {AddItemToCart,carItems,RemoveItemToCart,SetCartItems,CountPrice}= useContext(CartContext)
  
    const RemoveItem=(id)=>{
      
      SetCartItems((olditem) => {
        return olditem.filter((aryElm, index) => {
          if(id==aryElm.id){
           
            return false
          }
          return true
        })
  
      })
    }

    return(<> <div className='checkout-container '>
    <div className='checkout-header'>
<div className='header-block'><span>Product</span></div>
<div className='header-block'><span>Description</span></div>
<div className='header-block'><span>Quantity</span></div>
<div className='header-block'><span>Price</span></div>
<div className='header-block'><span>Remove</span></div>
</div>
{carItems.map((cartitem)=>{
  return(<>
  <Checkout_item cartitem={cartitem} RemoveItem={RemoveItem}/>
</>)
})}
<span className='total'>Total:{CountPrice}</span>
    </div>
   
    </>)
}

export default Checkout