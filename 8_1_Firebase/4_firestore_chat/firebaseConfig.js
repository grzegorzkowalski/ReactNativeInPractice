import firebase from "firebase/app";
import "firebase/firestore";

//Firebase config
var firebaseConfig = {
  apiKey: "AIzaSyBl2mbAxVASoQ7jJdx9kcCRM-GM2avRmqE",
  authDomain: "coderlslab.firebaseapp.com",
  databaseURL: "https://coderlslab.firebaseio.com",
  projectId: "coderlslab",
  storageBucket: "coderlslab.appspot.com",
  messagingSenderId: "490304552202",
  appId: "1:490304552202:web:b6ad68334b53ce161fcef3",
};
// Zainicjuj Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db