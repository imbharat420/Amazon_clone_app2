import { createUserWithEmailAndPassword } from "firebase/auth";
// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createUser } from "../lib/User.sanity";
const firebaseConfig = {
  apiKey: "AIzaSyA95iVfpJ2H6cF8WThBuGQoGs7rcW1MCGs",
  authDomain: "reactnative-clone-304aa.firebaseapp.com",
  projectId: "reactnative-clone-304aa",
  storageBucket: "reactnative-clone-304aa.appspot.com",
  messagingSenderId: "659449508564",
  appId: "1:659449508564:web:4bbdf26212193dd9154141",
  measurementId: "G-T366KQ4CG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const SingUp = async (user: any) => {
  const { name, email, password } = user;
  console.log("user", user);
  return await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      createUser(user);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
