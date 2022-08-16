import Categoryitem from '../category-item/category-item.components'
import './directory.style.scss'
const Directory =({categories})=>{
   
    return(<>
    <div className="category-container">
        {categories.map((category)=>{
          return <Categoryitem key={category.id} category={category}/>
        })}

      </div>
    </>)
}

export default Directory