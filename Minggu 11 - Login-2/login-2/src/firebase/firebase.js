import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-z59wAdlVZd8salCGqxbo2-WxwwSHous",
  authDomain: "minggu11-c3844.firebaseapp.com",
  projectId: "minggu11-c3844",
  storageBucket: "minggu11-c3844.appspot.com",
  messagingSenderId: "68827573142",
  appId: "1:68827573142:web:a46799612ccab680b08bb7",
  measurementId: "G-CYMB4HGYX6"
  };
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;