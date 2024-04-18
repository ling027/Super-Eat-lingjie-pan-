// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore"; // Import getFirestore from the Firebase SDK

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcf11fN5ZbQppoK9diuYRdXiM6vv3el-Y",
  authDomain: "supereats-3c1b9.firebaseapp.com",
  projectId: "supereats-3c1b9",
  storageBucket: "supereats-3c1b9.appspot.com",
  messagingSenderId: "972136108227",
  appId: "1:972136108227:web:336ab99185219475bd9276"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const input = doc(firestore, 'users/userInput');

function writeInput() {
  const docData ={
    description: 'A delicious vanilla latte',
    price: 3.99,
    milk: 'Whole',
    vegan: false,
  }
  /*Will write a new doc or replace a old doc.*/
  setDoc(doc(firestore, 'users/userInput'), docData);

  /*Will only update a pre-existing doc, if does not exist will throw an error.*/
  updateDoc(doc(firestore, 'users/userInput'), docData);
}

const ordersCollection = collection(firestore, 'orders');

function addANewDocument() {
  const newDoc = addDoc(ordersCollection, {
    customer: 'Arthur',
    drink: 'Latte',
    total_cost: 100,
  })
  console.log(`Your doc was created at ${newDoc.path}`)
}

//writeInput();
addANewDocument();
