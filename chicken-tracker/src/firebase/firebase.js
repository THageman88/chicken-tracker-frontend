// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyBC_vaoRh4KHFcxiYx7GGa8fFc21zCDvac",
  authDomain: "chicken-tracker-43a88.firebaseapp.com",
  projectId: "chicken-tracker-43a88",
  storageBucket: "chicken-tracker-43a88.appspot.com",
  messagingSenderId: "162594254668",
  appId: "1:162594254668:web:a0f94be7baedc1dd9ea9e9",
  measurementId: "G-X2TXPEEMZ7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };