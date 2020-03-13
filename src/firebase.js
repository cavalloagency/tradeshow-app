import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAZWSFG1xi-YA-Z84LJB02bErKoZ58o9SQ",
  authDomain: "tradeshow-app-4b8e8.firebaseapp.com",
  databaseURL: "https://tradeshow-app-4b8e8.firebaseio.com",
  projectId: "tradeshow-app-4b8e8",
  storageBucket: "tradeshow-app-4b8e8.appspot.com",
  messagingSenderId: "821155671717",
  appId: "1:821155671717:web:d9dbd1343d5e3d228ce74c",
  measurementId: "G-2QK0Y4KEVC"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const auth = firebase.auth();
export const data = firebase.firestore();

export default firebase;
