// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHkd-HXWJpKpgXUT19ZPlNx5DaD4mhcKA",
    authDomain: "lingo-bingo-d4a82.firebaseapp.com",
    projectId: "lingo-bingo-d4a82",
    storageBucket: "lingo-bingo-d4a82.firebasestorage.app",
    messagingSenderId: "152549107049",
    appId: "1:152549107049:web:675f19fbc6a1b32aee49f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;