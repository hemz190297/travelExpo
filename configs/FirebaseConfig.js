// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXE-dbr7dKnrr7zVI4PN13hQ6zP8o4-LM",
  authDomain: "learnfirebase-9fb7b.firebaseapp.com",
  projectId: "learnfirebase-9fb7b",
  storageBucket: "learnfirebase-9fb7b.firebasestorage.app",
  messagingSenderId: "832689181011",
  appId: "1:832689181011:web:115166717975d7151fd1a6",
  measurementId: "G-T0YYQT1SP6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
