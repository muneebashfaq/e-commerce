import { createContext,useState,useEffect } from "react";

const AddProductToCart=(carItems,SetProducts)=>{
    const CheckProducts = carItems.find((cartitem)=>
        cartitem.id ==  SetProducts.id
    )
    if(CheckProducts){
        return carItems.map((cartitem)=>
        cartitem.id == SetProducts.id
        ?{...cartitem,quantity : cartitem.quantity + 1} :cartitem
        ); 
    }

    return[...carItems,{...SetProducts,quantity:1}]

}

const RemoveProductToCart=(carItems,SetProducts)=>{
    const CheckProducts = carItems.find((cartitem)=>
        cartitem.id ==  SetProducts.id
    )

    if(CheckProducts.quantity == 1){
    return carItems.filter((carItem)=>carItem.id != SetProducts.id)
    }

    if(CheckProducts){
        return carItems.map((cartitem)=>
        cartitem.id == SetProducts.id
        ?{...cartitem,quantity : cartitem.quantity - 1} :cartitem
        ); 
    }
}

export const CartContext=createContext({
    iscartopen:false,
    setiscartopen:()=>{},
    carItems:[],
    AddItemToCart:()=>{},
    RemoveItemToCart:()=>{},
    CountItem:0,
    CountPrice:0,
                 
})

export const CartProvider=({children})=>{

    const [iscartopen,setiscartopen] = useState(false)
    const [CountItem,SetCountItem] = useState(0)
    const [CountPrice,SetCountPrice] = useState(0)
    const [carItems,SetCartItems] =  useState([])
    const AddItemToCart=(Products)=>{
        return SetCartItems(AddProductToCart(carItems,Products))
    }

    const RemoveItemToCart=(Products)=>{
        return SetCartItems(RemoveProductToCart(carItems,Products))
    }



    useEffect(() => {
        const count = carItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        SetCountItem(count);
      }, [carItems]);

      useEffect(() => {
        const count = carItems.reduce(
          (total, cartItem) =>
           total + cartItem.price*cartItem.quantity,
          0
        );
        SetCountPrice(count);
      }, [CountItem]);



    const value = {iscartopen,setiscartopen,AddItemToCart,carItems,SetCartItems,CountItem,RemoveItemToCart,CountPrice}

return(<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}