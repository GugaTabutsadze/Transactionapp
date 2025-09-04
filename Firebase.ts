// Firebase.js - Client-side only initialization
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEhKnQNxHjebA_G8X5zbEt2ZccF3VR144",
  authDomain: "transactionapp-1f044.firebaseapp.com",
  projectId: "transactionapp-1f044",
  storageBucket: "transactionapp-1f044.appspot.com",
  messagingSenderId: "142543666034",
  appId: "1:142543666034:web:7955bdc0287f9f28077beb",
  measurementId: "G-8EJ81F8CQJ"
};

// Initialize Firebase only on client side and prevent duplicate initialization
let app;
let auth;
let db;
let analytics;

if (typeof window !== 'undefined') {
  // Check if Firebase is already initialized
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  
  auth = getAuth(app);
  db = getFirestore(app);
  
  // Initialize Analytics only if measurementId exists
  if (firebaseConfig.measurementId) {
    analytics = getAnalytics(app);
  }
}

export { auth, db, analytics };
{/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)*/}