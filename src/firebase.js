import firebase from "./firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBhquRdP-YJr58yiP2p9Su1Wy8DpFMpbpY",
    authDomain: "tinder-clone-267ff.firebaseapp.com",
    databaseURL: "https://tinder-clone-267ff.firebaseio.com",
    projectId: "tinder-clone-267ff",
    storageBucket: "tinder-clone-267ff.appspot.com",
    messagingSenderId: "617366103707",
    appId: "1:617366103707:web:1bc62c0bd6f7bff6fb883e",
    measurementId: "G-LQ4BMNHKVT"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;