import { useState, createContext,useEffect  } from "react";
import SHOP_DATA from "../../shop-data.js";
import { getCategoriesAndDocuments } from "../../utlis/firebase/firebase.utils.js";
export const ProductContext=createContext({
    CheckProduct:{},
})

export const ProductProvider=({children})=>{
        const [CheckProduct,SetProduct] = useState({})
  useEffect(()=>{
        const Getdata =async()=>{
            const data = await getCategoriesAndDocuments()
            SetProduct(data)
        }
        Getdata()
    })

    const value ={CheckProduct} 

    return( <ProductContext.Provider value={value}>{children}</ProductContext.Provider>)
}