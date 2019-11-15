import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";


var config = {
  apiKey: "AIzaSyAbEDZlYjrmRXdWfgZWYpWOs9r8wijS2Vk",
  authDomain: "net-ninja-marioplan-60ba5.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-60ba5.firebaseio.com",
  projectId: "net-ninja-marioplan-60ba5",
  storageBucket: "net-ninja-marioplan-60ba5.appspot.com",
  messagingSenderId: "552586664119",
  appId: "1:552586664119:web:9fd38c86dfda3c8c891532",
  measurementId: "G-E32BG5ZT55"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
