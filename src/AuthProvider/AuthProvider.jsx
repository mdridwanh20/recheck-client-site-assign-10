import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const facebookProvider = new FacebookAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const googleProvider = new GoogleAuthProvider()


  console.log(user);

  // create new users
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout here
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  // facebook with login
  const facebookLogin = () =>{
    return signInWithPopup(auth, facebookProvider)
  }

  // github Provider
  const gitHubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
  }

  // github Provider
  const googleWithLogin = () =>{
    return signInWithPopup(auth, googleProvider)
  }



  // keep logged the user in your website :
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  },[]);


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createNewUser,
    loginUser,
    logOut,
    facebookLogin,
    gitHubLogin,
    googleWithLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
