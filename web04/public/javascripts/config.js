// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_lcRr3h3yjrqJOdck2jfiGY8btFeUNdk",
  authDomain: "inha-27935.firebaseapp.com",
  projectId: "inha-27935",
  storageBucket: "inha-27935.appspot.com",
  messagingSenderId: "683629658696",
  appId: "1:683629658696:web:11e20dd55129ba3254ce7d",
  measurementId: "G-5X15GJBLSL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
