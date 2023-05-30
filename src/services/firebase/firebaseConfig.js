import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);