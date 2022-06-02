import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANUF4_iLEVMOrHEALFZrlSpkAxPchpBvs",
  authDomain: "big-project-pbf.firebaseapp.com",
  projectId: "big-project-pbf",
  storageBucket: "big-project-pbf.appspot.com",
  messagingSenderId: "885364667419",
  appId: "1:885364667419:web:24917de4c30948b92ff4be",
  measurementId: "G-NGH4P1ERH7"
  };
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;