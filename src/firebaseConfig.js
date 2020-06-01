import firebase from 'firebase';

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBp8BW2her6OAJu2VDZGzE40k6OTBT3wFk",
  authDomain: "creative-card-app-efbe6.firebaseapp.com",
  databaseURL: "https://creative-card-app-efbe6.firebaseio.com",
  projectId: "creative-card-app-efbe6",
  storageBucket: "creative-card-app-efbe6.appspot.com",
  messagingSenderId: "931571090012",
  appId: "1:931571090012:web:009c10d609d354d503dc99",
  measurementId: "G-Q6KDF00H3P"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();