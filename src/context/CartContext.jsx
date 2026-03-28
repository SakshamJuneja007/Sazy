// CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { database } from "../firebase-config"; 
import { ref, onValue, set, remove } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userId, setUserId] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    if (!userId) return;

    const cartRef = ref(database, `carts/${userId}`);
    const unsubscribe = onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.keys(data).map((productId) => {
          const productSizes = data[productId];
          return Object.keys(productSizes).map((size) => ({
            productId,
            size,
            quantity: productSizes[size],
          }));
        }).flat();
        setCartItems(items);
      } else {
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  const addToCart = (productId, size, quantity) => {
    if (!userId) return;

    const cartRef = ref(database, `carts/${userId}`);
    const productRef = ref(cartRef, productId);
    const sizeRef = ref(productRef, size);

    onValue(sizeRef, (snapshot) => {
      const currentQuantity = snapshot.val() || 0;
      set(sizeRef, currentQuantity + quantity);
    });
  };

  const removeFromCart = (productId, size) => {
    if (!userId) return;

    const itemRef = ref(database, `carts/${userId}/${productId}/${size}`);
    remove(itemRef);
  };

  // New function to handle order placement and remove cart items
  const onOrderPlace = () => {
    if (!userId) return;

    const cartRef = ref(database, `carts/${userId}`);
    remove(cartRef); // Removes all items in the user's cart
    setCartItems([]); // Clear local cart state
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, onOrderPlace }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default CartProvider;
