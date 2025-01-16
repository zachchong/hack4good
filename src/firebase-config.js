// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD5LqwbLby1TuWEeBwZUw0R3yIZlFeFpA",
  authDomain: "hack4good-f53f7.firebaseapp.com",
  projectId: "hack4good-f53f7",
  storageBucket: "hack4good-f53f7.firebasestorage.app",
  messagingSenderId: "616842141415",
  appId: "1:616842141415:web:eb2b38d0c78d94db0b4c42",
  measurementId: "G-F4JCYKWZ3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the auth object
export const auth = getAuth(app);