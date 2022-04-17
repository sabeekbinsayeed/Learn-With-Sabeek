// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAI3a3mlWwku-ZzQkJI63h95HKES7sBZ8M",
    authDomain: "independent-service-413ed.firebaseapp.com",
    projectId: "independent-service-413ed",
    storageBucket: "independent-service-413ed.appspot.com",
    messagingSenderId: "126036807631",
    appId: "1:126036807631:web:f4ac0a5fb55ca6ca940cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;