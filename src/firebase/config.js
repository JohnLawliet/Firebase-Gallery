import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDR248wGDK2r9YyMXKWD8UPpRyz34vxGx8",
    authDomain: "firegram-a0f3e.firebaseapp.com",
    projectId: "firegram-a0f3e",
    storageBucket: "firegram-a0f3e.appspot.com",
    messagingSenderId: "582764977674",
    appId: "1:582764977674:web:1557c2cb435ce6a19049f3",
    measurementId: "G-6H45XRHKQD"
  };

//   So that we don't reinitialize the app
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()

const db = app.firestore()
const storage = firebase.storage()  
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export {db, storage, timestamp}