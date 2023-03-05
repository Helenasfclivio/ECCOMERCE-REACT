// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkrT981xYi4YJzHDyjNEcxF0OsUApXpng",
  authDomain: "helena-reactjs.firebaseapp.com",
  projectId: "helena-reactjs",
  storageBucket: "helena-reactjs.appspot.com",
  messagingSenderId: "856985105034",
  appId: "1:856985105034:web:f12108781d213c155af373",
  measurementId: "G-B3KHNJF6HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirestore = () => {
return App
}