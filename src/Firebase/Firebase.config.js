// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCERh2OOcQbkZkswuATzzoSxtwJ7KtFNjY",
  authDomain: "re-check-assign-10.firebaseapp.com",
  projectId: "re-check-assign-10",
  storageBucket: "re-check-assign-10.firebasestorage.app",
  messagingSenderId: "327006701822",
  appId: "1:327006701822:web:5fa3d37f436c060ababdaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
