import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAJl-W5ljo4rJeR6NZBz4i2Sw5LzrH0Kh0",
    authDomain: "class71-feaf7.firebaseapp.com",
    projectId: "class71-feaf7",
    storageBucket: "class71-feaf7.appspot.com",
    messagingSenderId: "1046355147716",
    appId: "1:1046355147716:web:86875dac8a141bd43d4291"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
