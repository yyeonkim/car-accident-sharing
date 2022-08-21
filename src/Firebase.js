// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLE3UFuCgdGSxRMJbcNd02whpcPMcLSpE",
  authDomain: "gongcha-2b0f0.firebaseapp.com",
  projectId: "gongcha-2b0f0",
  storageBucket: "gongcha-2b0f0.appspot.com",
  messagingSenderId: "349778674",
  appId: "1:349778674:web:6a6bc4544c2858703f966b",
  measurementId: "G-WXYJJYCCZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default initializeApp(firebaseConfig);