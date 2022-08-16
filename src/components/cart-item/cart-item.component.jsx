import './cart-item.styles.scss'
const Cart_Item=({cartitem})=>{
    const {name,quantity,imageUrl,price} = cartitem
    return(<>
    <div className='cart-item-container'>
        <img src={imageUrl} alt='picture' className='img'/>
        <div className='item-details '>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} × price</span>
        </div>
        </div>  </>)
}

export default Cart_Item