// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { apiKey } from "../config/api-key";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey.firebaseConfig.apiKey,
  authDomain: apiKey.firebaseConfig.authDomain,
  projectId: apiKey.firebaseConfig.projectId,
  storageBucket: apiKey.firebaseConfig.storageBucket,
  messagingSenderId: apiKey.firebaseConfig.messagingSenderId,
  appId: apiKey.firebaseConfig.appId
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);