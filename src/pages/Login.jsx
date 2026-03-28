import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../auth';
import { useAuth } from '../context/authcontext';

const Login = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);
        try {
            await doSignInWithEmailAndPassword(email, password);
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsSigningIn(false);
        }
    };

    const onGoogleSignIn = async () => {
        setIsSigningIn(true);
        try {
            await doSignInWithGoogle();
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <div>
            {userLoggedIn && <Navigate to="/" replace={true} />}
            <main className="w-[90%] h-screen flex items-center justify-center">
                <div className="w-96 space-y-5 p-4 shadow-lg border rounded-xl">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Welcome Back</h3>
                    </div>
                    <form onSubmit={onSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>
                        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="text-center text-sm">
                        Don't have an account? <Link to="/register" className="font-bold">Sign up</Link>
                    </p>
                    <div className="flex items-center">
                        <div className="border-b flex-grow" />
                        <p className="px-2 text-sm">OR</p>
                        <div className="border-b flex-grow" />
                    </div>
                    <button
                        disabled={isSigningIn}
                        onClick={onGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2 py-2 border rounded hover:bg-gray-100"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                            <path d="..." fill="#EA4335" />
                            <path d="..." fill="#FBBC05" />
                            <path d="..." fill="#34A853" />
                            <path d="..." fill="#4285F4" />
                        </svg>
                        {isSigningIn ? 'Signing In...' : 'Sign In with Google'}
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;
