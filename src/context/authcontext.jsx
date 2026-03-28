import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../auth";

// Create the Authcontext
const Authcontext = createContext();

// Custom Hook for accessing the Auth context
export function useAuth() {
    return useContext(Authcontext);
}

// AuthProvider component to wrap the app
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    // Firebase Auth State Listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setUserLoggedIn(!!user); // Set logged-in state based on user presence
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    const value = {
        currentUser,
        userLoggedIn,
        setCurrentUser, // Add this to allow Logout to reset user state
        loading,
        doSignInWithEmailAndPassword,
        doSignInWithGoogle,
    };

    return (
        <Authcontext.Provider value={value}>
            {!loading && children}
        </Authcontext.Provider>
    );
}
