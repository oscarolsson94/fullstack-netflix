import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDFL_TheUJdBB6JBbixY9nA5Cc7ZK5BAfg",
  authDomain: "fullstack-netflix.firebaseapp.com",
  projectId: "fullstack-netflix",
  storageBucket: "fullstack-netflix.appspot.com",
  messagingSenderId: "492348746124",
  appId: "1:492348746124:web:4dcf60aef725c344e68ea9",
  measurementId: "G-XD6CG819DE",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
