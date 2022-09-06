import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBraZJ_sJzTYuhEaFETtZZKInBSQDsrZlg",
    authDomain: "lists-todo.firebaseapp.com",
    projectId: "lists-todo",
    storageBucket: "lists-todo.appspot.com",
    messagingSenderId: "427657483600",
    appId: "1:427657483600:web:cb4a42a092a78794188855",
    measurementId: "G-K40FHCTBHE"
});

// connection to firebase database
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { auth, db };