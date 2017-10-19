import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCdosYny7BSfQ_2F-y-wdermL7CdFlS4oo",
  authDomain: "spirit-animal-ef518.firebaseapp.com",
  databaseURL: "https://spirit-animal-ef518.firebaseio.com",
  projectId: "spirit-animal-ef518",
  storageBucket: "spirit-animal-ef518.appspot.com",
  messagingSenderId: "1060040864226"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
