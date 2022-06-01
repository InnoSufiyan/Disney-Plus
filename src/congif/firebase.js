import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

import { getStorage } from "firebase/storage";

import { GoogleAuthProvider } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

const storage = getStorage();
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export {
    auth,
    provider,
    storage,
}

export default db;