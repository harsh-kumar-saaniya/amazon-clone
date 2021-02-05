import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBRYKbsywxTbU1UlrG1ls5QEFi0u1bEZvs",
    authDomain: "clone-e9c9f.firebaseapp.com",
    projectId: "clone-e9c9f",
    storageBucket: "clone-e9c9f.appspot.com",
    messagingSenderId: "253805028163",
    appId: "1:253805028163:web:efe5e5e29783f771d985f6",
    measurementId: "G-J1XXSKBXBR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };