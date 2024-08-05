// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCj-bGS7QxJ10zlis5LQz2CfmHAsjWyGI",
  authDomain: "inventory-management-c8e08.firebaseapp.com",
  projectId: "inventory-management-c8e08",
  storageBucket: "inventory-management-c8e08.appspot.com",
  messagingSenderId: "259396150261",
  appId: "1:259396150261:web:a60e5b36de98a896f4f6bc",
  measurementId: "G-PNYFC6L0HT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}