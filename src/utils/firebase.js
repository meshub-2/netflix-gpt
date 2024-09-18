// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1ML45BSGSRVn1ikdkrFok9vJnL8ibW7o",
    authDomain: "netflixgpt-f1030.firebaseapp.com",
    projectId: "netflixgpt-f1030",
    storageBucket: "netflixgpt-f1030.appspot.com",
    messagingSenderId: "63451999957",
    appId: "1:63451999957:web:12dc33c792cb606226bc5c",
    measurementId: "G-S6KPEB5NYP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
