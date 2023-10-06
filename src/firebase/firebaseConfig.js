// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgO5JsjiJOSaHfq8yVChoPk4y-krHfgp0",
  authDomain: "react-event-management-auth.firebaseapp.com",
  projectId: "react-event-management-auth",
  storageBucket: "react-event-management-auth.appspot.com",
  messagingSenderId: "933070186920",
  appId: "1:933070186920:web:74400f54f5f36bc5bf559d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);