import React from "react";
import { useAuth } from "../context/authcontext"; // Use the custom hook
import { signOut } from "firebase/auth"; // Firebase signOut function
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setCurrentUser } = useAuth(); // Access setCurrentUser from context
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user from Firebase
      setCurrentUser(null); // Reset user state in context
      console.log("Logout successful"); // Log confirmation to console
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error.message); // Log any errors
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
