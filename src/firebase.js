import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "gongcha-2b0f0.firebaseapp.com",
  projectId: "gongcha-2b0f0",
  storageBucket: "gongcha-2b0f0.appspot.com",
  messagingSenderId: "349778674",
  appId: "1:349778674:web:6a6bc4544c2858703f966b",
  measurementId: "G-WXYJJYCCZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
