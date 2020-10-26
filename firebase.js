import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDiLHQC4Y9Mf_c3DGPehhH91Xo9BgvjKmk",
    authDomain: "clone-ca355.firebaseapp.com",
    databaseURL: "https://clone-ca355.firebaseio.com",
    projectId: "clone-ca355",
    storageBucket: "clone-ca355.appspot.com",
    messagingSenderId: "58567826927",
    appId: "1:58567826927:web:9f07c12f283825013f6a1a",
    measurementId: "G-0Y2G9QMJ5X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
