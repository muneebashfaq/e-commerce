import { useContext } from "react"
import { ProductContext } from "../../components/Context/Product.context"
import Category_preview from "../../components/category-preview/category-preview"
import './categories.styles.scss'
const Categories=()=>{
const {CheckProduct} =  useContext(ProductContext)

{/* Code when  firebase not datafetch
{

   Object.keys(CheckProduct).map(title=>{
    const product = CheckProduct[title]
    return <Category_preview key={title} title={product.title} product={product}/>
})

    
    }*/} 

return(<>


{
    Object.keys(CheckProduct).map(title=>{
        const product = CheckProduct[title]
        return <Category_preview key={title} title={title} product={product}/>
    })
    
    }


</>)
}


export default Categories