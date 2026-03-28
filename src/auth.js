import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail, updatePassword, sendEmailVerification, GoogleAuthProvider } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    try {
        return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error creating user with email and password:", error.message);
        throw error;
    }
}

export const doSignInWithEmailAndPassword = async (email, password) => {
    try {
        return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Error signing in with email and password:", error.message);
        throw error;
    }
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result;
    } catch (error) {
        console.error("Error signing in with Google:", error.message);
        throw error;
    }
}

export const doSignout = async () => {
    try {
        return await signOut(auth);
    } catch (error) {
        console.error("Error signing out:", error.message);
        throw error;
    }
}

export const doPasswordReset = (email) => {
    try {
        return sendPasswordResetEmail(auth, email);
    } catch (error) {
        console.error("Error sending password reset email:", error.message);
        throw error;
    }
}

export const doPasswordChange = (password) => {
    try {
        return updatePassword(auth.currentUser, password);
    } catch (error) {
        console.error("Error changing password:", error.message);
        throw error;
    }
}

export const doSendEmailVerification = () => {
    try {
        return sendEmailVerification(auth.currentUser, {
            url: `${window.location.origin}/home`,
        });
    } catch (error) {
        console.error("Error sending email verification:", error.message);
        throw error;
    }
}
