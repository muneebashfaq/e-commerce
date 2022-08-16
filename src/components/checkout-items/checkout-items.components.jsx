import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../Context/Cart.context';
  
const Checkout_item=(props)=>{
    const {AddItemToCart,RemoveItemToCart}= useContext(CartContext)
    const {id,name,imageUrl,price,quantity}=props.cartitem
    return(<div className='checkout-item-container'>
        <div className='image-container'><img src={imageUrl} className='img'/></div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <span className='arrow' onClick={()=>RemoveItemToCart(props.cartitem)}>
                   &#10094;
            </span>
            <span className='value'>
            {quantity}
            </span>
            <span className='arrow' onClick={()=>AddItemToCart(props.cartitem)}>
            &#10095;
            </span>
            </span>
        <span className='price'>{price}</span>
        <span className='remove-button' onClick={()=>props.RemoveItem(id)}>&#10005;</span>

    </div>
    )
}
export default Checkout_item