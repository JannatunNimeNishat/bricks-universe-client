import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app)

    const signUp = (email, password) => {
        // console.log(email,password);
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserInformation = (currentUser, displayName, photoURL) => {
        setLoading(true)
        return updateProfile(currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    const singIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubScribe = onAuthStateChanged(auth, currentUser=>{
            setLoading(false)
            setUser(currentUser);
            //jwt token
            if(currentUser && currentUser.email){
                //console.log('jwt',currentUser);
                const useInfo = {
                    email:currentUser.email
                }

                fetch('https://bricks-universe-server.vercel.app/jwt',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json' //
                    },
                    body: JSON.stringify(useInfo)
                })
                .then(res=>res.json())
                .then(data =>{
                    
                    localStorage.setItem('bricks-universe',data.token)
                })
            }
            else{
                localStorage.removeItem('bricks-universe')
            }
        })

        return ()=>{
            unSubScribe()
        }
    })
    const authInfo = {
        user,
        loading,
        signUp,
        updateUserInformation,
        singIn,
        logOut,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;