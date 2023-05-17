import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState('true');
    const auth = getAuth(app)

    const signUp = (email, password) => {
        console.log(email,password);
        setLoading('true')
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserInformation = (currentUser, displayName, photoURL) => {
        setLoading('true')
        return updateProfile(currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    const singIn = (email,password)=>{
        setLoading('true')
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo = {
        user,
        loading,
        signUp,
        updateUserInformation,
        singIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;