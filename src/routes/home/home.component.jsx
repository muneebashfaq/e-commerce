import Directory from "../../components/directory/directory.componet"
import { Outlet } from "react-router";
import { Category_Context } from "../../components/Context/Category.context";
import { useContext } from "react";
import { useEffect } from "react";
const Home=()=> {

  const {MCategory} = useContext(Category_Context)
useEffect(()=>{

},[])
    return (<>
   <Outlet/>
   {
    Object.keys(MCategory).map((id)=>{
     return (<Directory key={id} categories={MCategory}/>)
      })
   }
       
    </>);
  }
  
  export default Home;
  