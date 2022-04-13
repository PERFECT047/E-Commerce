import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdzRl1qcxHlCMSBS-pqBfekCWJHLqKANg",
  authDomain: "e-commerce-e7957.firebaseapp.com",
  projectId: "e-commerce-e7957",
  storageBucket: "e-commerce-e7957.appspot.com",
  messagingSenderId: "388513801638",
  appId: "1:388513801638:web:0c3a2177ad78e777fc9b67",
  measurementId: "G-XS3EELZ4H3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
