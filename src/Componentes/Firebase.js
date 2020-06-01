import firebase from "firebase";
   
const firebaseConfig = {
   apiKey: "AIzaSyAZWbq9f6llUBu1p_X2AWNqYpSgbTP3p8c",
    authDomain: "donvelox-38f56.firebaseapp.com",
    databaseURL: "https://donvelox-38f56.firebaseio.com",
    projectId: "donvelox-38f56",
    storageBucket: "donvelox-38f56.appspot.com",
    messagingSenderId: "525674913738",
    appId: "1:525674913738:web:87d9fb89abb32df7f6f933",
    measurementId: "G-RPTP4VTK4M"
};

  firebase.initializeApp(firebaseConfig);
 
  export default firebase;
 
