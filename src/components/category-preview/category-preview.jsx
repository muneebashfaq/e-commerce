import './category-preview.styles.scss'
import { Link } from "react-router-dom"
import ProductCard from '../product-card/Product_Card.component'
const Category_preview =({title,product})=>{
   {/* { #code when not  firebase   work 
        product.items.filter((_,index)=> index < 4).map((products)=>{
         return <ProductCard  products={products}/>
        })
    } */}
    return(<>
    <div className='category-preview-container'>
<h2>
    <span className='title'><Link to={title.toLowerCase()}>{title.toUpperCase()}</Link></span>
</h2>
<div className='preview'>
    {
        product.filter((_,index)=> index < 4).map((products)=>{
            return <ProductCard  products={products}/>
           })
    }

</div>
    </div>
    </>)

}

export default Category_preview