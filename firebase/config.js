// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDszSe_cATBBFiuhWpgRbGkzDFwNBVHOa8",
  authDomain: "supereats-4d4c2.firebaseapp.com",
  projectId: "supereats-4d4c2",
  storageBucket: "supereats-4d4c2.appspot.com",
  messagingSenderId: "991413016831",
  appId: "1:991413016831:web:850c6b6168c4123e3e54ca",
  measurementId: "G-0MXEBS7ECJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);