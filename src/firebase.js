// Import the functions you need from the SDKs you need
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAJsRIbIblKUKT-YEwANT0Zk6HnR_5viBU",
  authDomain: "drive-clone-a094d.firebaseapp.com",
  projectId: "drive-clone-a094d",
  storageBucket: "drive-clone-a094d.appspot.com",
  messagingSenderId: "511083869803",
  appId: "1:511083869803:web:275ea841e7de6ffa99232e",
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }
