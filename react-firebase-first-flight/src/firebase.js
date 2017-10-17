import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBGD7bNYQUdAVVUM3383MMPfV2Gf4y-eMw",
  authDomain: "first-flight-with-friend-8e7cf.firebaseapp.com",
  databaseURL: "https://first-flight-with-friend-8e7cf.firebaseio.com",
  projectId: "first-flight-with-friend-8e7cf",
  storageBucket: "",
  messagingSenderId: "222933178893"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
