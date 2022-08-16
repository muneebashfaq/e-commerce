import { useParams } from "react-router"
import { useContext } from "react"
import { ProductContext } from "../../components/Context/Product.context"
import ProductCard from "../../components/product-card/Product_Card.component"
import { useEffect } from "react"
import { useState } from "react"
import './categories-preview.styles.scss'
const Categories_Preview=()=>{

    {/*Code when firebase not work
    
    <div className="products-constainer">
    {
           Object.keys(CheckProduct).map((id)=>{
            if(CheckProduct[id].title.toLowerCase() === category){
        return( Object.keys(CheckProduct[id].items).map((index)=>{
                    return <ProductCard key={id} title={CheckProduct[id].title} products={CheckProduct[id].items[index]} />
                })

        )
            }
               
           })
    }
*/}
    const {category} = useParams()
    const {CheckProduct} =  useContext(ProductContext)
    const [Products,SetProducts] = useState(CheckProduct[category])
    useEffect(()=>{
    SetProducts(CheckProduct[category])

    },[category,CheckProduct])

    return(<>
    <div className="categories-title">
        <h1>{category.toUpperCase()}</h1>
    </div>
    <div className="categories-container">
    {
      Products &&
      Products.map((value)=>{
        return <ProductCard products={value} key={value.id}/>
      })
      
    }
    </div>
    </>)
}

export default Categories_Preview