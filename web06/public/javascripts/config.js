 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCQ2IQFjfctC73H79Sn2a5wvmnz5McbxDU",
   authDomain: "inha-688ca.firebaseapp.com",
   projectId: "inha-688ca",
   storageBucket: "inha-688ca.appspot.com",
   messagingSenderId: "33424351964",
   appId: "1:33424351964:web:2360816b9b57d1b5198a19",
   measurementId: "G-K44H1TR2X7"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);