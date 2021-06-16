import firebase from 'firebase';
require ('@firebase/firestore');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAW9JdQrYP95SemmUXJwAi5HYAn3BQfmiw",
    authDomain: "bartersystem-8679b.firebaseapp.com",
    projectId: "bartersystem-8679b",
    storageBucket: "bartersystem-8679b.appspot.com",
    messagingSenderId: "955918413437",
    appId: "1:955918413437:web:688ca28acc3d80996d8b14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();