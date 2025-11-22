// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnXfc-995FxP_so__ZydwNFop116KNtAo",
  authDomain: "arun-paper-plate.firebaseapp.com",
  databaseURL: "https://arun-paper-plate-default-rtdb.firebaseio.com",
  projectId: "arun-paper-plate",
  storageBucket: "arun-paper-plate.firebasestorage.app.com",
  messagingSenderId: "467970346890",
  appId: "1:467970346890:web:948cf7d07b9de68f304273",
  measurementId: "G-Z5L26K3ENH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, analytics};