import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBsD5OYlTzkSWx_RR9Hq_xI4qpXt42cSpM",
  authDomain: "class-reviews-c07da.firebaseapp.com",
  databaseURL: "https://class-reviews-c07da-default-rtdb.firebaseio.com",
  projectId: "class-reviews-c07da",
  storageBucket: "class-reviews-c07da.appspot.com",
  messagingSenderId: "416621863596",
  appId: "1:416621863596:web:b26aa675200f5df0b83509",
  measurementId: "G-KHZ7NJ7PVK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
