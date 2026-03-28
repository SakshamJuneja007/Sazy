import React, { createContext, useEffect, useState } from "react";
import { ref, set, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";
import { database, auth } from "../firebase-config"; // Adjust path to your firebase config
import { products } from "../assets/assets"; // Corrected import

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [saveTimeoutId, setSaveTimeoutId] = useState(null);

  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in:", user.uid);
        setUserId(user.uid);
        loadCartFromFirebase(user.uid); // Load cart from Firebase when user logs in
      } else {
        console.log("User logged out");
        setUserId(null);
        setCartItem({}); // Clear cart when user logs out
      }
    });
    return () => unsubscribe();
  }, []);

  // Load cart from Firebase
  const loadCartFromFirebase = (userId) => {
    const cartRef = ref(database, `carts/${userId}`);
    onValue(cartRef, (snapshot) => {
      if (snapshot.exists()) {
        setCartItem(snapshot.val());
        console.log("Loaded cart from Firebase:", snapshot.val());
      } else {
        setCartItem({});
        console.log("No cart found in Firebase for this user");
      }
    });
  };

  // Save cart to Firebase with debounce
  useEffect(() => {
    if (userId && Object.keys(cartItem).length > 0) {
      if (saveTimeoutId) {
        clearTimeout(saveTimeoutId); // Clear previous timeout if exists
      }

      const timeoutId = setTimeout(async () => {
        try {
          setLoading(true);
          console.log("Saving cart to Firebase:", cartItem);
          const cartRef = ref(database, `carts/${userId}`);
          await set(cartRef, cartItem);
          console.log("Cart saved successfully");
        } catch (err) {
          console.error("Failed to save cart:", err);
        } finally {
          setLoading(false);
        }
      }, 500); // Debounce interval

      setSaveTimeoutId(timeoutId);
    }
  }, [cartItem, userId]);

  // Function to add an item to the cart
  const addToCart = (itemId, size) => {
    if (!userId) {
      console.error("Cannot add to cart: userId is undefined.");
      return;
    }

    setCartItem((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[itemId]) {
        if (updatedCart[itemId][size]) {
          updatedCart[itemId][size]++;
        } else {
          updatedCart[itemId][size] = 1;
        }
      } else {
        updatedCart[itemId] = { [size]: 1 };
      }

      console.log("Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  // Function to get the cart counter
  const getCartCounter = () => {
    console.log("Calculating cart counter...");
    let totalCounter = 0;
    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        totalCounter += cartItem[itemId][size];
      }
    }
    console.log("Total Cart Count:", totalCounter);
    return totalCounter;
  };

  const value = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    loading,
    error,
    userId,
    getCartCounter,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
