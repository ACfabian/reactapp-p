// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

/*const firebaseConfig = {
  apiKey: "AIzaSyCy9D8d6AfkmMr-TyzCaviEHWHVz4fi3Hc",
  authDomain: "login-acsolves.firebaseapp.com",
  projectId: "login-acsolves",
  storageBucket: "login-acsolves.appspot.com",
  messagingSenderId: "442943350064",
  appId: "1:442943350064:web:432c7e8afd34827a2294f5"
};*/

const firebaseConfig = {
  apiKey: "AIzaSyA-vFdJkJtVXQZ_HS5Oxss0F48sDq6n39U",
  authDomain: "parqueadero-8ff72.firebaseapp.com",
  projectId: "parqueadero-8ff72",
  storageBucket: "parqueadero-8ff72.appspot.com",
  messagingSenderId: "995394008356",
  appId: "1:995394008356:web:52b82c7cebabc1a31c6fb1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
export const auth = getAuth(app);