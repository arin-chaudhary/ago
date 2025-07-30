import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbHK9xLhOJpNd7Ffy96_kaNztzVzbUigM",
  authDomain: "agoo-ea0b5.firebaseapp.com",
  projectId: "agoo-ea0b5",
  storageBucket: "agoo-ea0b5.firebasestorage.app",
  messagingSenderId: "97102318491",
  appId: "1:97102318491:web:cd9bafaea7a6949ae3ef3e",
  measurementId: "G-F33YSHBTCJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
