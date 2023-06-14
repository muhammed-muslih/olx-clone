// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAx3YfBRNAcljna-bxT3JwBbFKrmCYejlI",
  authDomain: "olx-24bc0.firebaseapp.com",
  projectId: "olx-24bc0",
  storageBucket: "olx-24bc0.appspot.com",
  messagingSenderId: "772397282734",
  appId: "1:772397282734:web:16e9a46980f9a6ddc2843f",
  measurementId: "G-FDK5PC23J2"
};

// Initialize Firebase
const app  = initializeApp(firebaseConfig);
export const db = getFirestore(app);
