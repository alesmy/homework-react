// import firebase from "firebase";
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyCboQ-LOfiFKJm3VOoSKVBZHW7oKP0oI5s",
    authDomain: "gb-project-b570e.firebaseapp.com",
    databaseURL: "https://gb-project-b570e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-project-b570e",
    storageBucket: "gb-project-b570e.appspot.com",
    messagingSenderId: "681008574306",
    appId: "1:681008574306:web:8e135c6fa81448742b463b",
    measurementId: "G-1DVDD3TC6X"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();