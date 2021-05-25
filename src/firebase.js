import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCJ9H_LxbMx_4frEQpfYmyxz_AsOrrCfas",
    authDomain: "dp4-2-11022.firebaseapp.com",
    projectId: "dp4-2-11022",
    storageBucket: "dp4-2-11022.appspot.com",
    messagingSenderId: "82501508884",
    appId: "1:82501508884:web:274db47ba6891f83dfac01"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
export { db, firebaseApp, firebase,storage};