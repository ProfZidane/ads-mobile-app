// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/**
 * Directement obtenu depuis le site Firebase
 */

export const firebaseConfig = {
  apiKey: "AIzaSyCkD3eaONQ4pIHc3ee1vLS-_2tvbn6ZqBw",
  authDomain: "adversting-85fcb.firebaseapp.com",
  projectId: "adversting-85fcb",
  storageBucket: "adversting-85fcb.appspot.com",
  messagingSenderId: "1097831226826",
  appId: "1:1097831226826:web:cf92c73573527d7dda4333",
  measurementId: "G-WQ7CDJ4L5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


