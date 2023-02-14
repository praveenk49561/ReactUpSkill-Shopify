// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9CO5uX78tMQ00L6VQ2P4AB-9s_0XAPwI",
  authDomain: "shopify-d1735.firebaseapp.com",
  projectId: "shopify-d1735",
  storageBucket: "shopify-d1735.appspot.com",
  messagingSenderId: "515653006042",
  appId: "1:515653006042:web:cade7c2e14b023d763abe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authProvider = new GoogleAuthProvider();
authProvider?.setCustomParameters({
    promt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, authProvider);


export const fireStore_DB = getFirestore();

export const createUserDocumentFromAuth = async (userDetails) => {
    try {
        const userDocRef = doc(fireStore_DB, 'users', userDetails?.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc?.exists()) {
            const createdAt = new Date();
            const { displayName, email } = userDetails;

            await setDoc(userDocRef, { displayName, email, createdAt });
        }

        return userDetails;
    } catch (error) {
        console.log(error);
    }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (auth, email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

