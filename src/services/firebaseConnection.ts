import firebase from "firebase/app";
import 'firebase/firestore';

let firebaseConfig = {

  apiKey: "AIzaSyDyZrh9XxWXj7kPCib0p-Ie6MOeu98YnBU",
  authDomain: "boardapp-60211.firebaseapp.com",
  projectId: "boardapp-60211",
  storageBucket: "boardapp-60211.appspot.com",
  messagingSenderId: "1025162349951",
  appId: "1:1025162349951:web:7cd62e06e7fdff57e69e4a",
  measurementId: "G-HL65HTS64E"

};

  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  