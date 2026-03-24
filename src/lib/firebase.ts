import { initializeApp } from "firebase/app";
import { getAuth, PhoneAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUMMY_FIREBASE_CONFIG",
  authDomain: "muvy-app.firebaseapp.com",
  projectId: "muvy-app",
  storageBucket: "muvy-app.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:placeholder",
  databaseURL: "https://muvy-app-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const phoneProvider = new PhoneAuthProvider(auth);
