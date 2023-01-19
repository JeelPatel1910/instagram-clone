// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC2jx4DocIwnNcic_jsoAWLfZqNlD7Nu4",
  authDomain: "instagram-c75b4.firebaseapp.com",
  projectId: "instagram-c75b4",
  storageBucket: "instagram-c75b4.appspot.com",
  messagingSenderId: "718334557028",
  appId: "1:718334557028:web:c7df931a6cce786f1f9871"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage};