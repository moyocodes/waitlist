import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyAaz0v1Nxr-fRX5RXr4a8Q4LnvsOr_rEQU",
  authDomain: "waitlist-91430.firebaseapp.com",
  projectId: "waitlist-91430",
  storageBucket: "waitlist-91430.firebasestorage.app",
  messagingSenderId: "176851887143",
  appId: "1:176851887143:web:909a08dfff95f4cef91a02",
  measurementId: "G-QTHDD6W080"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
