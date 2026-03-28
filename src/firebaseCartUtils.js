import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config.js"; 

export const saveCartToFirestore = async (userId, cartData) => {
  try {
    await setDoc(doc(db, "carts", userId), { cartData });
    console.log("Cart saved successfully!");
  } catch (error) {
    console.error("Error saving cart to Firestore:", error);
  }
};

export const fetchCartFromFirestore = async (userId) => {
  try {
    const docRef = doc(db, "carts", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Cart data fetched:", docSnap.data());
      return docSnap.data().cartData; 
    } else {
      console.log("No cart data found!");
      return {}; 
    }
  } catch (error) {
    console.error("Error fetching cart from Firestore:", error);
    return {}; 
  }
};
