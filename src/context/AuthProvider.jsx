import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

    const provider = new GoogleAuthProvider()
    const googleUser = () => {
        return signInWithPopup(auth, provider)

    }

    const githubProvider = new GithubAuthProvider()
    const signInWithGithub = () => {
      return  signInWithPopup(auth, githubProvider)
       
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
        googleUser,
        signInWithGithub
    }
    return <CreateAuth.Provider value={authData}>
        {children}
    </CreateAuth.Provider>
}

const useAuthGolobally = () => {
    return useContext(CreateAuth)
}

export { AuthProvider, useAuthGolobally }