import firebase from 'firebase/app' ;
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCVFiE9UENyvLbIRPmpCVjjbjagrxAC9lE",
  authDomain: "hzwebsite.firebaseapp.com",
  projectId: "hzwebsite",
  storageBucket: "hzwebsite.appspot.com",
  messagingSenderId: "1019557867267",
  appId: "1:1019557867267:web:97d4428c7c4258bb840336"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  // const storage = firebase.storage();


 export {db,auth}