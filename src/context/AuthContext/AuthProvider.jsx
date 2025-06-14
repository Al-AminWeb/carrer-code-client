import React, {useEffect, useState} from 'react';
import AuthContext from "./AuthContext.jsx";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";
import {auth} from '../../firebase/firebase.config.js'

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const[user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setLoading(false);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    },[])
    const authInfo = {
        loading,
        user,
        createUser,
        logInUser,
        signOutUser

    }


    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
