import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXmtIhjwJtoSAEYA0kj4TOhJBiZfRq7AE",
  authDomain: "react-canton-debat.firebaseapp.com",
  databaseURL: "https://react-canton-debat-default-rtdb.firebaseio.com",
  projectId: "react-canton-debat",
  storageBucket: "react-canton-debat.appspot.com",
  messagingSenderId: "299145369104",
  appId: "1:299145369104:web:b4dee7fec048b12a061c95"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


