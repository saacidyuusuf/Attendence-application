// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUGGET,
  messagingSenderId: process.env.MESSEGE_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()