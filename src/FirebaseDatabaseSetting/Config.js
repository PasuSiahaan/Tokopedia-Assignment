import firebase from 'firebase/app'
import 'firebase/database'

// Set the configuration for your app
// TODO: Replace with your project's config object
const firebaseConfig = {
    apiKey: "AIzaSyDXgx3HQGYS8EbloEdKHEajQM5doOuLT80",
    authDomain: "tokopedia-assignment-99969.firebaseapp.com",
    projectId: "tokopedia-assignment-99969",
    storageBucket: "tokopedia-assignment-99969.appspot.com",
    messagingSenderId: "65279055550",
    appId: "1:65279055550:web:fd1df5d7e7fa574c3f70ef",
    measurementId: "G-BH9QYR1T6T"
  };
var fireDB = firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export default fireDB.database().ref()
