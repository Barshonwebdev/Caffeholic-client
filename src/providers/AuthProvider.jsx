import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext=createContext('null');
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const googleProvider= new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
        
    }

   
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const githubLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
       
    }
    const userLogout=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                setLoading(false);
                setUser(currentUser);
                console.log(currentUser);
            }
            else{
                setLoading(false);
                setUser('')
            }
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={googleLogin, githubLogin, user,userLogout,createUser,signIn,loading}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;