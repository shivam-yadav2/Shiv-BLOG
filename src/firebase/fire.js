
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-rpAYrA-BMD7LvTOi5VOMmJy-d49ga8U",
    authDomain: "e-bharat-b0775.firebaseapp.com",
    projectId: "e-bharat-b0775",
    storageBucket: "e-bharat-b0775.appspot.com",
    messagingSenderId: "229536628108",
    appId: "1:229536628108:web:356d32353ddbe10f7a6aa9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const fireDb = getFirestore(app)

export {auth , fireDb}