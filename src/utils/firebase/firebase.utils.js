import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCb7H4wz6t9vUjAVf9ZU6FYxHtHmGscYbw",
  authDomain: "clothing-db-47715.firebaseapp.com",
  projectId: "clothing-db-47715",
  storageBucket: "clothing-db-47715.appspot.com",
  messagingSenderId: "3049425770",
  appId: "1:3049425770:web:d5dbfce26faadbbbb23313"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);