import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBVqwUk2qh_gN8S8lYpHiQkokmaa_riq5k",
    authDomain: "upload-e73b6.firebaseapp.com",
    projectId: "upload-e73b6",
    storageBucket: "upload-e73b6.appspot.com",
    messagingSenderId: "203642603324",
    appId: "1:203642603324:web:34ed6bebc48ebdd5a2c039",
    measurementId: "G-D6KGK8SX1F"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();
export{storage, firebase as default};