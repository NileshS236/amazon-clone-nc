import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWUaDnvLYaXO9bRctxmC4h4ZVFXqslP3s",
  authDomain: "clone-9e4dd.firebaseapp.com",
  databaseURL: "https://clone-9e4dd.firebaseio.com",
  projectId: "clone-9e4dd",
  storageBucket: "clone-9e4dd.appspot.com",
  messagingSenderId: "1094713186428",
  appId: "1:1094713186428:web:7f351be8553fbf89eb51f9",
  measurementId: "G-1XRG0PZ2DQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
