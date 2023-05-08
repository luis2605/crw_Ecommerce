import {initializeApp } from "firebase/app"
import {getAuth , signInWithRedirect, signInWithPopup ,GoogleAuthProvider} from "firebase/auth"

import {getFirestore , doc , getDoc , setDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt0OQ0nkj3Jm1WjLypg1bo30hRaZ1vYnQ",
    authDomain: "crw-clothing-db-85fb1.firebaseapp.com",
    projectId: "crw-clothing-db-85fb1",
    storageBucket: "crw-clothing-db-85fb1.appspot.com",
    messagingSenderId: "700853879072",
    appId: "1:700853879072:web:2b1a4b72706e497253d745"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider =new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db =getFirestore();
export const createUserDocumentFromAuth = async(userAuth)=>{
const userDocRef = doc(db, "users" ,userAuth.uid) 
const userSnapshot =await getDoc(userDocRef);

//method for checking if user exists in Firebase
console.log(userSnapshot.exists());

// if user does not exist, create
if(!userSnapshot.exists()){
  const {displayName , email} = userAuth
  const createdAt =new Date();
  try{
 await setDoc(userDocRef, {
  displayName,
  email,
  createdAt
 })
  }catch(error){
console.log("error creating user " + error)
  }
}

return userDocRef
}