// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyCja8hmK7tSMr5aNrL1_q9FuVcb81DWIVI",
  authDomain: "reactauthapp-4e9fc.firebaseapp.com",
  projectId: "reactauthapp-4e9fc",
  storageBucket: "reactauthapp-4e9fc.firebasestorage.app",
  messagingSenderId: "164628300809",
  appId: "1:164628300809:web:c8826ed64148d67c0324d8",
  measurementId: "G-P9S9JC7R94"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
