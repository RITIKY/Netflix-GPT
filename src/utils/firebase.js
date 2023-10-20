// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzJF6bFPTeyjrSiAP7kbNZtRAGv0dq6gI",
  authDomain: "netflix-gpt-b0094.firebaseapp.com",
  projectId: "netflix-gpt-b0094",
  storageBucket: "netflix-gpt-b0094.appspot.com",
  messagingSenderId: "297970449681",
  appId: "1:297970449681:web:9f880a945f8fa472ffe0b0",
  measurementId: "G-C32NKZFXRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();