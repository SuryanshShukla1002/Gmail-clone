// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyB89P4PtKB82xleonYUFtQW8o9Vw32tunE",
  authDomain: "clone-yt-fec5d.firebaseapp.com",
  projectId: "clone-yt-fec5d",
  storageBucket: "clone-yt-fec5d.appspot.com",
  messagingSenderId: "124102254753",
  appId: "1:124102254753:web:3b1751c3f0ec761eb1d0e0",
  measurementId: "G-C0EJ238CC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()