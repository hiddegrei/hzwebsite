import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVwVxdjxkFJBRxieOYSvljvokCP0zKeSo",
  authDomain: "hzwebsite-91d36.firebaseapp.com",
  projectId: "hzwebsite-91d36",
  storageBucket: "hzwebsite-91d36.appspot.com",
  messagingSenderId: "83421581252",
  appId: "1:83421581252:web:08d5fdfcddc8d79e949e91",
  measurementId: "G-SB1MKRW12R"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage = firebase.storage();


 export {db,auth,storage}