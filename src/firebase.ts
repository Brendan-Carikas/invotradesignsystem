// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkgvtXLH92T6SO8QuEEdaSbi08QQF2vJY",
  authDomain: "ids-project-597cc.firebaseapp.com",
  projectId: "ids-project-597cc",
  storageBucket: "ids-project-597cc.firebasestorage.app",
  messagingSenderId: "458873805582",
  appId: "1:458873805582:web:22f00877ba36a9ed17d55f",
  measurementId: "G-9VG2LS1YT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
