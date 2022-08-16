import {BackgroundImage,Body,DirectoryItemContainer} from './category-item.style'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const Categoryitem=({category})=>{
    const {title,imageUrl,routes} = category;
 
    const navigate =useNavigate()
    const NavgateHandler =()=>navigate(routes)
 return(<>  
  <DirectoryItemContainer onClick={NavgateHandler}>
    
        <BackgroundImage imageUrl={imageUrl}
        />
      
        <Body>
        <Link to={`/shop/${title}`}>
            <h2>{title}</h2>
            <p>Shop Now</p>
            </Link>
        </Body>
       
    </DirectoryItemContainer>
    </>)
}

export default Categoryitem