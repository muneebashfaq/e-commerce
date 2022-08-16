import { createContext, useState,useEffect } from "react";
import { onAuthStateChangedListener,createuserdocument } from "../../utlis/firebase/firebase.utils";
export const UserContext = createContext({
  SetCurrentUser: () => null,
  CurrentUser: null,
});

export const UserProvider = ({ children }) => {
  const [CurrentUser, SetCurrentUser] = useState(null);
  const value = { CurrentUser, SetCurrentUser };

  useEffect(()=>{
   
    const unsubscribe = onAuthStateChangedListener((user)=>{
      SetCurrentUser(user)
      createuserdocument(user)
    })
   
     return unsubscribe;
  },[])
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};