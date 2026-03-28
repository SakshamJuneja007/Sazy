// src/utils/firebase-utils.js
import { getDatabase, ref, set } from "firebase/database";
import { database } from "../config/firebase-config"; 

export const saveOrderToFirebase = (orderId, orderData) => {
  const orderRef = ref(database, 'orders/' + orderId); 

  set(orderRef, orderData)
    .then(() => {
      console.log("Order saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving order:", error);
    });
};
