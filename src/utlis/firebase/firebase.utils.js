
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup,
    signOut, signInWithRedirect,
     GoogleAuthProvider,createUserWithEmailAndPassword,
     signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc,collection,writeBatch,query, getDocs } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyADg7sWXid0r_qnntpzvja7s2MPaCjOyNI",
    authDomain: "e-commerce-web-4cf53.firebaseapp.com",
    projectId: "e-commerce-web-4cf53",
    storageBucket: "e-commerce-web-4cf53.appspot.com",
    messagingSenderId: "233689658370",
    appId: "1:233689658370:web:da43180baab2deef7d231b"
};


const firebaseapp = initializeApp(firebaseConfig);


export const auth = getAuth()


const googleprovider = new GoogleAuthProvider()
googleprovider.setCustomParameters({
    prompt: "select_account"
});

export const signinwithpopup = () => signInWithPopup(auth, googleprovider)

const db = new getFirestore()


export const createuserdocument = async (userauth,additionalinfo ={}) => {
    if(!userauth)return
    const userdocref = doc(db, "Users", userauth.uid)

    const snapShot = await getDoc(userdocref)
    if (!snapShot.exists()) {
        const { displayName, email } = userauth
        const createdat = new Date()
        try {

            setDoc(userdocref, {
                displayName,
                email,
                createdat,
                ...additionalinfo
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return userdocref
};
export const createuserwithemailandpassword = async(email,password)=>{
    if(!email||!password) return
   
  return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    )
}

export const signinuserwithemailandpassword = async(email,password)=>{
    if(!email||!password) return
   
  return await signInWithEmailAndPassword(
        auth,
        email,
        password
    )
}
export const signout = async()=>{await signOut(auth)}

export const onAuthStateChangedListener = (callback)=>onAuthStateChanged(auth,callback)


export const AddCollectionsAndDocuments = async(collectionKey,AddToObjects)=>{
    const CollectionRef = collection(db,collectionKey)
    const batch = writeBatch(db)
    AddToObjects.forEach(object => {
        const docRef = doc(CollectionRef,object.title.toLowerCase())
        batch.set(docRef,object)
    });
    await batch.commit()
    console.log("done")
}

export const getCategoriesAndDocuments = async () => {
   const CollectionRef =  collection(db,"Categories");
   const q = query(CollectionRef);
   const QuerySnapShot = await getDocs(q);
   const QueriesMap = QuerySnapShot.docs.reduce((acc,getSnapshot)=>{
    const{title,items} = getSnapshot.data();
    acc[title.toLowerCase()]= items;
    return acc;
   },{})
   return QueriesMap
  };