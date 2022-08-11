// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYneE4AVvAi_0Vo7CxQX4EtvcjWcTuYsc",
  authDomain: "ecommerce-14afa.firebaseapp.com",
  projectId: "ecommerce-14afa",
  storageBucket: "ecommerce-14afa.appspot.com",
  messagingSenderId: "976775445615",
  appId: "1:976775445615:web:5f7fa4d9812dc1f33ee19a",
  measurementId: "G-2M78RRSY71"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);