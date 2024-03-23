// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-80d85.firebaseapp.com",
  projectId: "mern-auth-80d85",
  storageBucket: "mern-auth-80d85.appspot.com",
  messagingSenderId: "66980710736",
  appId: "1:66980710736:web:9afdd8a8d1650a14b90455",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
