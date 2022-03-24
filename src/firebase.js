// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzUPQdd1zOM6qyxrms6wU6AAcZ4sZb7eg",
  authDomain: "portfolio-834bd.firebaseapp.com",
  projectId: "portfolio-834bd",
  storageBucket: "portfolio-834bd.appspot.com",
  messagingSenderId: "58109007297",
  appId: "1:58109007297:web:7b9fa5c9bdf5db65fd8b40",
  measurementId: "G-YV56E65ZT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);