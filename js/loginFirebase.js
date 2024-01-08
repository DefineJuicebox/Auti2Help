// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref, update, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const log = document.getElementById("log");



const fetchNormUsername = () => {
  const user = auth.currentUser; // Get the currently signed-in user
  if (user) {
    const userRef = ref(database, 'users/' + user.uid);
    const usertest = user.displayName;
    document.getElementById("user-name-display").innerHTML = usertest;
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        const usernameElement = document.getElementById('user-name-display');
        if (usernameElement) {
          usernameElement.textContent = userData.name; // Update the text content
        }
        //alert("Welcome " + userData.name + "!");
      } else {
        console.log("No user data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
};

// For Google Sign In
const signInButton = document.getElementById("googlesignin");
localStorage.setItem('googleSignedIn', false); // Initialize in localStorage

const userSignIn = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const usertest = user.displayName;
      console.log(user);
      console.log(usertest);
      localStorage.setItem('googleSignedIn', true); // Set in localStorage
      window.location.href = 'loggeduser.html';
    }).catch((error) => {
      // Handle error
    });
};

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (user && localStorage.getItem('googleSignedIn') === 'true') {
      // Handle Google sign-in specific code
      const userName = document.getElementById("user-name-display");
      if (userName) {
        userName.textContent = usertest2;
      }
    } else if (user) {
      fetchNormUsername(); // Regular sign-in
    } else {
      // alert("AuthStateChanged: Signed out!");
    }
  });
});

signInButton.addEventListener('click', userSignIn);

log.addEventListener('click', () => {
  var email =
    document.getElementById('email').value;
  var password =
    document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt
      })

      //alert("signed in with email and password!")
      window.location.href = 'loggeduser.html';

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});




