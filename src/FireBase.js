import firebase from "firebase";

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdbVF0cBpYgXujykx5-VB9RCFxPB8wi3Y",
  authDomain: "instagram-clone-291eb.firebaseapp.com",
  projectId: "instagram-clone-291eb",
  storageBucket: "instagram-clone-291eb.appspot.com",
  messagingSenderId: "897849492584",
  appId: "1:897849492584:web:e4fc98b0a821032be3a7dd",
  measurementId: "G-1ZDMDGKT0E"
});

const db = FirebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
