import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


 let firebaseConfig = {
  apiKey: "AIzaSyBVDsHL2ixd8s9uUTeyxVLqLQuShk5Uuvg",
  authDomain: "speedhiring-8423b.firebaseapp.com",
  databaseURL: "https://speedhiring-8423b.firebaseio.com",
  projectId: "speedhiring-8423b",
  storageBucket: "speedhiring-8423b.appspot.com",
  messagingSenderId: "1058392437114",
  appId: "1:1058392437114:web:b3c59be4b8c5a8ffd966c3"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();


export default firebase; 