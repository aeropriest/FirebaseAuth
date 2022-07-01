// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = firebase.auth();
export { auth };

/*

// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
// let app;

// if (firebase.app.length === 0) {
//   app = firebase.app.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app;
// }

const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };

// const analytics = getAnalytics(app);

*/
