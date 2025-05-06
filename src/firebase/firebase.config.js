// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBygIsT6XUH4d1su2y1oKwkzI9lMHKq4VU",
  authDomain: "dragon-news-firebase-6d08d.firebaseapp.com",
  projectId: "dragon-news-firebase-6d08d",
  storageBucket: "dragon-news-firebase-6d08d.firebasestorage.app",
  messagingSenderId: "327241832735",
  appId: "1:327241832735:web:f12024019a1991e8c3382a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;