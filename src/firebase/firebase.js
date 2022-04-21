import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBagIfSbndcxGYhZ876h8IhreeQNafWU4k",
  authDomain: "portafolio-48eae.firebaseapp.com",
  projectId: "portafolio-48eae",
  storageBucket: "portafolio-48eae.appspot.com",
  messagingSenderId: "380895861064",
  appId: "1:380895861064:web:e2ada789b1606c0be47b7d",
  measurementId: "G-SXL3PC7QEH"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {app, db};
