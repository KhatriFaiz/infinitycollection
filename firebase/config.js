import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxyA2XGHgBnYrwgCnc_Ybl7i1gv6ghVRY",
  authDomain: "ecommerce-146a6.firebaseapp.com",
  projectId: "ecommerce-146a6",
  storageBucket: "ecommerce-146a6.appspot.com",
  messagingSenderId: "135624426313",
  appId: "1:135624426313:web:95eb5dd337c78826d9d098",
  measurementId: "G-SP39039ZFB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
