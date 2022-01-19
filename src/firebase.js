// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCepkGGi0DCo6FbbldU1OYLnkE-V51ODu8",
  authDomain: "clone-59362.firebaseapp.com",
  projectId: "clone-59362",
  storageBucket: "clone-59362.appspot.com",
  messagingSenderId: "1011503553407",
  appId: "1:1011503553407:web:2bbbdb5138a7d5a455d84a",
  measurementId: "G-KMP2K93B4S",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
