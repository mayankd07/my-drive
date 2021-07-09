import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBmyfwHmbvh_imhDaWCm2eRaoOwMINJ088",
    authDomain: "my-drive-3140f.firebaseapp.com",
    projectId: "my-drive-3140f",
    storageBucket: "my-drive-3140f.appspot.com",
    messagingSenderId: "142172713723",
    appId: "1:142172713723:web:78c63fca3e89032002365e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebase.firestore()

  export { auth, provider, db, storage}