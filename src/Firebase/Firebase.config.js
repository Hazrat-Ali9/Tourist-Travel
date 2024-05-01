// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZEyEWMiZa2GFgmMsXbM4SixAIz58yDgE",
    authDomain: "travel-guru-react-183cf.firebaseapp.com",
    projectId: "travel-guru-react-183cf",
    storageBucket: "travel-guru-react-183cf.appspot.com",
    messagingSenderId: "986247937396",
    appId: "1:986247937396:web:7ca36c8f3c4866fcc78021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);