import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "react-canton-debat.firebaseapp.com",
    databaseURL: "https://react-canton-debat-default-rtdb.firebaseio.com",
    projectId: "react-canton-debat",
    storageBucket: "react-canton-debat.appspot.com",
    messagingSenderId: "299145369104",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);