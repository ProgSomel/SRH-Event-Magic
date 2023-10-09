// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjBrBq-MD3WX6TS5Z-S3T6mBEXigt2CA",
  authDomain: "react-event-management-a-eec9a.firebaseapp.com",
  projectId: "react-event-management-a-eec9a",
  storageBucket: "react-event-management-a-eec9a.appspot.com",
  messagingSenderId: "301500126426",
  appId: "1:301500126426:web:e9366db5f0dd321a2601e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
