// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVxE7bFZaZrLp7RWvlXChcpvQA2qRHfUM",
  authDomain: "netflifgpt.firebaseapp.com",
  projectId: "netflifgpt",
  storageBucket: "netflifgpt.appspot.com",
  messagingSenderId: "537508160375",
  appId: "1:537508160375:web:13ef98a05c921b1d143772",
  measurementId: "G-GNG61VRXX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();