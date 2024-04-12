// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc34F7W3Q7o0Wj3u-p1Arpg89tVvVPRmg",
  authDomain: "sup2colis-59505.firebaseapp.com",
  projectId: "sup2colis-59505",
  storageBucket: "sup2colis-59505.appspot.com",
  messagingSenderId: "513126240676",
  appId: "1:513126240676:web:91d9534772970d42ae3131",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app, "gs://sup2colis-59505.appspot.com");
