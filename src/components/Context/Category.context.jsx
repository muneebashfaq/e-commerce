import { useEffect } from "react"
import { createContext, useState } from "react"
import SHOP_DATA from "../../shop-data.js";
import Categories from "../../categories.js"

export const Category_Context = createContext({
    MCategory:{},
})

export const CategoryProvider =({children})=>{
    const [MCategory,SetMCategory] = useState(Categories)


    const  value ={MCategory}
    return (<Category_Context.Provider value={value}>{children}</Category_Context.Provider>)
}

