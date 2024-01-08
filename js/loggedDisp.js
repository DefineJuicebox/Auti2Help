// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();



// Function to fetch and display username
const fetchAndDisplayUsername = () => {
  const user = auth.currentUser;
  if (user) {
    const userRef = ref(database, 'users/' + user.uid);
    get(userRef).then((snapshot) => {
      if (snapshot.exists()) {
        const usertest = user.displayName;
        const userData = snapshot.val();
        const username = userData.name; // Assuming 'name' holds the username
        document.getElementById('user-name-display').innerText = "Hi! " + usertest;
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
};

// Fetch username when the user state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    fetchAndDisplayUsername();
    alert("loggedDisp launched");
  }
});
