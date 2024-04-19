// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc, collection, addDoc, updateDoc } from "firebase/firestore"; // Import getFirestore from the Firebase SDK

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
export function writeInput() {
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

/**/
export function addANewMenuItem (name: string, price: number, description: string, imageuri: string  ) {
  const newDoc = addDoc(collection(firestore, 'menuItem'), {
    name: name,
    price: price,
    description: description,
    imageuri: imageuri,
  })
  console.log(`Your doc was created`)
}