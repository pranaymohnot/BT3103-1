import firebase from 'firebase';

const firebaseConfig = {};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
