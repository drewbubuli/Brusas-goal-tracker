
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlSY2bQ8lUsvt4rzdRtE77IF0ihbYps70",
  authDomain: "goalproject-a.firebaseapp.com",
  projectId: "goalproject-a",
  storageBucket: "goalproject-a.firebasestorage.app",
  messagingSenderId: "829922683655",
  appId: "1:829922683655:web:2fb8b3690a55c8f6e273a2"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)