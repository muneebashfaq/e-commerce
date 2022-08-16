import Home from "./routes/home/home.component";
import { Route,Routes,Outlet } from "react-router";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/Shop.components";
import Checkout from "./components/checkout/checkout.components";
const App=()=> {
  return (<>
  <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path="shop/*" element={<Shop/>}/>
    <Route path="auth" element={<Authentication/>}/>
    <Route path="checkout" element={<Checkout/>}/>
    </Route>
  </Routes>     
  </>);
}
export default App;
