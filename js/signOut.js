// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref, update, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPQugVWKT0EIkDrgOGEPVXhkWMotTwi40",
  authDomain: "kitahackhathon.firebaseapp.com",
  databaseURL: "https://kitahackhathon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kitahackhathon",
  storageBucket: "kitahackhathon.appspot.com",
  messagingSenderId: "351449291643",
  appId: "1:351449291643:web:c5ef27af759b6add8afbde",
  measurementId: "G-G0Z85WJEXN"
};

const auth = getAuth();

const buttontest = document.getElementById("signoutbutton");

buttontest.addEventListener("click", (e) => {
  signOut(auth).then(() => {
    e.preventDefault();
    // Sign-out successful.
    console.log("You have been signed out");
    // Redirect to a different page or update the UI
    window.location.href = 'index.html'; // Redirect to home page or login page
  }).catch((error) => {
    // An error happened.
    console.error("Sign out error", error);
  });
});






