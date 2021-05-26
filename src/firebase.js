import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyAq6XaWDEyfvlrQcao9lmbx1n-hx9mElX0",
//     authDomain: "real-dp4.firebaseapp.com",
//     projectId: "real-dp4",
//     storageBucket: "real-dp4.appspot.com",
//     messagingSenderId: "832408248349",
//     appId: "1:832408248349:web:a27c36209f065c9200e6f4",
//     measurementId: "G-G8N15LCVK8"
// };

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