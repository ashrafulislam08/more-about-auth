import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHsIoaGr2qc--IT83bp4AKgtgA3oqNYSM",
  authDomain: "more-about-auth-59f31.firebaseapp.com",
  projectId: "more-about-auth-59f31",
  storageBucket: "more-about-auth-59f31.firebasestorage.app",
  messagingSenderId: "720690745055",
  appId: "1:720690745055:web:ff5930af3d9c5bc5e8636a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
