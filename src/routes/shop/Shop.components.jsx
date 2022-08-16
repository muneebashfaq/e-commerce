import { Route, Routes } from "react-router"
import Categories from "../categories/categories.components"
import Categories_Preview from "../categories-preview/categories-preview.component"
import './Shop.styles.scss'
const Shop=()=>{
    

return(<>


<Routes>
    <Route  index element={<Categories/>} />
    <Route path=":category" element={<Categories_Preview/>} />
</Routes>

</>)
}


export default Shop