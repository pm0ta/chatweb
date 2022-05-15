//configurações do firebase;


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQb1uD0B_huFSy_MKb15y_fdvEFQPsuD0",
  authDomain: "chatweb-8d79f.firebaseapp.com",
  projectId: "chatweb-8d79f",
  storageBucket: "chatweb-8d79f.appspot.com",
  messagingSenderId: "75790148850",
  appId: "1:75790148850:web:cb5387a80451b0f2f85c6b"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };