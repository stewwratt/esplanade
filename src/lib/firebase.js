// Import required classes from Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyB7oEQf-NoeZqsAdTLQAgWo84m3I1KnAZI",
  authDomain: "esplanade-46a07.firebaseapp.com",
  projectId: "esplanade-46a07",
  storageBucket: "esplanade-46a07.appspot.com",
  messagingSenderId: "803109975262",
  appId: "1:803109975262:web:f39f8e10520a6b6eb23e4f",
  measurementId: "1:803109975262:web:f39f8e10520a6b6eb23e4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
