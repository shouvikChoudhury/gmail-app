import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCzDMX1SvsnfQZGIc8jY9qrS5HPuyY3Xds",
    authDomain: "clone-477bd.firebaseapp.com",
    projectId: "clone-477bd",
    storageBucket: "clone-477bd.appspot.com",
    messagingSenderId: "764808442113",
    appId: "1:764808442113:web:ebe7d2e5cb7416f41fab00"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const authen = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, authen, provider }
