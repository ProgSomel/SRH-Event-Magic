import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


    //! Create User with Email and Password
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    //! Create User with Email and Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //! logout
    const logout = () => {
        return signOut(auth);
    } 

    //! On state Change 
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
    })

    const authInfo = {
        signInWithGoogle,
        createUser,
        user,
        logout,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;