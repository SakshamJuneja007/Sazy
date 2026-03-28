// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, get } from "firebase/database";  // Correctly importing database module
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGwuF8ERmtn216J2tKA0uyiTv5QDiHhxE",
  authDomain: "sazy-42e91.firebaseapp.com",
  projectId: "sazy-42e91",
  storageBucket: "sazy-42e91.appspot.com",
  messagingSenderId: "896577904628",
  appId: "1:896577904628:web:a87d6aa4dc0dcd94c5e3a1",
  measurementId: "G-M3SZB6TSXB",
  databaseURL: "https://sazy-42e91-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const storage = getStorage(app);
const database = getDatabase(app); 
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, storage, database, analytics, db, app };
