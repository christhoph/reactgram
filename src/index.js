import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "bulma";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

firebase.initializeApp({
  apiKey: "AIzaSyDINGJTOQY6Bir_snzIrumnGYbqAUKNog8",
  authDomain: "review-firebase-cs.firebaseapp.com",
  databaseURL: "https://review-firebase-cs.firebaseio.com",
  projectId: "review-firebase-cs",
  storageBucket: "review-firebase-cs.appspot.com",
  messagingSenderId: "5456176323",
  appId: "1:5456176323:web:cf789fad9dcdfbc4"
});

const auth = firebase.auth();
auth.signInAnonymously();
auth.onAuthStateChanged(user => user);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
