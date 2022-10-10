import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc ,collection, writeBatch} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCb7H4wz6t9vUjAVf9ZU6FYxHtHmGscYbw",
  authDomain: "clothing-db-47715.firebaseapp.com",
  projectId: "clothing-db-47715",
  storageBucket: "clothing-db-47715.appspot.com",
  messagingSenderId: "3049425770",
  appId: "1:3049425770:web:d5dbfce26faadbbbb23313"
};

const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp)
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth(); 
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocumnets = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    });
    await batch.commit();
    console.log("done");
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation= {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();  

        try {
            await setDoc(userDocRef, { 
                displayName, email, createdAt, ...additionalInformation
            });
        }
        catch(error){
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);