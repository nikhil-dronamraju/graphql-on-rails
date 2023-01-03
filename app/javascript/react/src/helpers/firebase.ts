// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5POeFlCf_Me49bFrgvmSle1Vw2ILlnWE",
  authDomain: "graphql-on-rails-700d3.firebaseapp.com",
  projectId: "graphql-on-rails-700d3",
  storageBucket: "graphql-on-rails-700d3.appspot.com",
  messagingSenderId: "692509302302",
  appId: "1:692509302302:web:e8330b443f57b4c521d80f",
  measurementId: "G-KRC1EPKY2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;