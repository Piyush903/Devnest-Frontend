// Import the functions you need from the SDKs you need

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUJNVqgIrq6w_-GaHA205fZKSErR3XICw",
  authDomain: "reactcrud-9f55a.firebaseapp.com",
  databaseURL: "https://reactcrud-9f55a-default-rtdb.firebaseio.com",
  projectId: "reactcrud-9f55a",
  storageBucket: "reactcrud-9f55a.appspot.com",
  messagingSenderId: "339968950949",
  appId: "1:339968950949:web:577bb1eb5a9aacb954c34c",
};

const app = firebase.initializeApp(firebaseConfig);
export const database = app.database();
export default app;
