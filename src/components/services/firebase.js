import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaKxmsWSFVd9fXOWCW-6VtB-RP2cUkmnQ",
  authDomain: "backend-09.firebaseapp.com",
  projectId: "backend-09",
  storageBucket: "backend-09.appspot.com",
  messagingSenderId: "1089030411908",
  appId: "1:1089030411908:web:8fa98bc534d696a7d394d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)