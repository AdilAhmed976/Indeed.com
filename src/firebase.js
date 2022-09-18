// import { firebase } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import "firebase/auth";

// Reviewed for: fw16_443 - these configurations are different for every env like dev, staging and prod
// create a config file and keep these scerets there and it should be automatically done based on which 
// build you are creating
const firebaseConfig = {
  apiKey: "AIzaSyC9leL35w1FF3VmARfKshAYycdr4bUtzDc",
  authDomain: "primal-context-360408.firebaseapp.com",
  projectId: "primal-context-360408",
  storageBucket: "primal-context-360408.appspot.com",
  messagingSenderId: "897243679921",
  appId: "1:897243679921:web:a0e98ed03e6b22c7142690",
  measurementId: "G-LQ4X6P4M82"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
