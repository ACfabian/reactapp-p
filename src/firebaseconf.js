// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy9D8d6AfkmMr-TyzCaviEHWHVz4fi3Hc",
  authDomain: "login-acsolves.firebaseapp.com",
  projectId: "login-acsolves",
  storageBucket: "login-acsolves.appspot.com",
  messagingSenderId: "442943350064",
  appId: "1:442943350064:web:432c7e8afd34827a2294f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);