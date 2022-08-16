
import Button from "../../routes/form-input/button";
import './product-card.styles.scss'
import { useContext, useEffect } from "react";
import { CartContext } from "../Context/Cart.context";
const ProductCard = (props) => {
 const {AddItemToCart}= useContext(CartContext)
 const {carItems}= useContext(CartContext)
const AddProductToCart=()=>{
  AddItemToCart(props.products)

}

  return (
<div className='product-card-container'>
      <img src={props.products.imageUrl} alt={`${props.products.name}`} />
      <div className='footer'>
        <span className='name'>{props.products.name}</span>
        <span className='price'>{props.products.price}</span>
      </div>
      <Button buttonType='inverted' onClick={AddProductToCart}>Add to card</Button>
    </div>
  )
  }
export default ProductCard;