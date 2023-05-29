import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const CreateAuth = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return auth.signOut();
    }

    const provider = GoogleAuthProvider()
    const googleUser = () => {
        return signInWithPopup(auth, provider)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authData = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleUser
    }
    return <CreateAuth.Provider value={authData}>
        {children}
    </CreateAuth.Provider>
}

export { AuthProvider }