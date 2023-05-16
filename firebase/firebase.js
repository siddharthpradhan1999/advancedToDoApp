// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAczIqKPRjuZkR7TGwsRTTsKZat07cYDyk",
  authDomain: "advancedtodoapp-ccb8f.firebaseapp.com",
  projectId: "advancedtodoapp-ccb8f",
  storageBucket: "advancedtodoapp-ccb8f.appspot.com",
  messagingSenderId: "1010869103286",
  appId: "1:1010869103286:web:69b164beb60c6743fd5417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)