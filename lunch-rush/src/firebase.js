import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBCMKxza-4lqBR3LRnP6Nen1UHA64K2G9s",
  authDomain: "lunch-rush-12d04.firebaseapp.com",
  databaseURL: "https://lunch-rush-12d04.firebaseio.com",
  projectId: "lunch-rush-12d04",
  storageBucket: "lunch-rush-12d04.appspot.com",
  messagingSenderId: "1009425168741"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
