
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAPYtNUvQgiwbi67pKdLVku2RpRnYBSId0",
    authDomain: "backend34860-a5d84.firebaseapp.com",
    projectId: "backend34860-a5d84",
    storageBucket: "backend34860-a5d84.appspot.com",
    messagingSenderId: "126784833911",
    appId: "1:126784833911:web:60a8cc069d52d20021f972"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)