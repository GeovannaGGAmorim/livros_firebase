// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMKEmS8_wmRpws7ez3F4QpAHJQoYEUmxs",
  authDomain: "geovanna-57c51.firebaseapp.com",
  projectId: "geovanna-57c51",
  storageBucket: "geovanna-57c51.appspot.com",
  messagingSenderId: "184946561416",
  appId: "1:184946561416:web:e5a4b0cef15ac362266a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)