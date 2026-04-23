import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApnCxjI2hSVM6lpjd7l73cFVgjNlCtqzs",
  authDomain: "contact-book-58fcf.firebaseapp.com",
  projectId: "contact-book-58fcf",
  storageBucket: "contact-book-58fcf.firebasestorage.app",
  messagingSenderId: "1024434872599",
  appId: "1:1024434872599:web:af95611d55ac01080f5752",
  measurementId: "G-LTDXDH3XQH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;