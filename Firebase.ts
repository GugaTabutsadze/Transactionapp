
// Firebase.js - TypeScript compatible version
import { initializeApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEhKnQNxHjebA_G8X5zbEt2ZccF3VR144",
  authDomain: "transactionapp-1f044.firebaseapp.com",
  projectId: "transactionapp-1f044",
  storageBucket: "transactionapp-1f044.appspot.com",
  messagingSenderId: "142543666034",
  appId: "1:142543666034:web:7955bdc0287f9f28077beb",
  measurementId: "G-8EJ81F8CQJ"
};

// Explicitly type the variables
let app: any = null;
let auth: Auth | null = null;
let db: Firestore | null = null;

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  
  auth = getAuth(app);
  db = getFirestore(app);
}

export { auth, db };
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