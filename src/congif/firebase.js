import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0buHOeGzCEajhYUtFEpPOpTPTUy7_SZ0",
  authDomain: "codfolio.firebaseapp.com",
  projectId: "codfolio",
  storageBucket: "codfolio.appspot.com",
  messagingSenderId: "552831050951",
  appId: "1:552831050951:web:b8fc318371041dcdf3cae2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage(); 

export {
    auth,
    provider,
    storage,
}

export default db;