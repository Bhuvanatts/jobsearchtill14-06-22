// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfgkUqPRUBp1_xa5MeRfWFWvslELsh7cM",
  authDomain: "jobsearch-46893.firebaseapp.com",
  projectId: "jobsearch-46893",
  storageBucket: "jobsearch-46893.appspot.com",
  messagingSenderId: "581106851555",
  appId: "1:581106851555:web:6b17a4750413a2f322efd6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };