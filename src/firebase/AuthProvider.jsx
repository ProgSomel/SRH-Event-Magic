import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    //! Create User with Email and Password
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        signInWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;