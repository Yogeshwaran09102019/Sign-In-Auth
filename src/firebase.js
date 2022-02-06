// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr19Yr4SQE7koAyEXTQfavDMlx6PVClsI",
  authDomain: "fierbase-auth-5ff94.firebaseapp.com",
  projectId: "fierbase-auth-5ff94",
  storageBucket: "fierbase-auth-5ff94.appspot.com",
  messagingSenderId: "822032304177",
  appId: "1:822032304177:web:173c6b190af6911c10ad10",
  measurementId: "G-69P16LFW7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getAuth(app);

export default firebase;