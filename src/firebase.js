import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5O9MNRsg2BH26X_hhlaFbYdG488_ZMf8",
  authDomain: "management-33df2.firebaseapp.com",
  projectId: "management-33df2",
  storageBucket: "management-33df2.appspot.com",
  messagingSenderId: "672527881595",
  appId: "1:672527881595:web:b372f453b6ed2d908fd9de"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};