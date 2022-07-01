// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkIUB-TISVtj7Xs5MRHPMSSsA_pCRs6PE",
  authDomain: "coinwatch-16730.firebaseapp.com",
  projectId: "coinwatch-16730",
  storageBucket: "coinwatch-16730.appspot.com",
  messagingSenderId: "267594157438",
  appId: "1:267594157438:web:e56ccbec6a8edeea8c372f",
  measurementId: "G-2EM3QB2BRH",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const auth = firebase.auth();

console.log("firebase loaded--------------------------------");
console.log(firebase);
console.log("firebase auth--------------------------------");
console.log(auth);
//export { auth };

//firebase version 8.2.2
