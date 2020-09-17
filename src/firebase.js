import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCjXiMKMEO-SL7MqlnfByqYcC57pKagy4",
    authDomain: "slackclone-2798a.firebaseapp.com",
    databaseURL: "https://slackclone-2798a.firebaseio.com",
    projectId: "slackclone-2798a",
    storageBucket: "slackclone-2798a.appspot.com",
    messagingSenderId: "827880346998",
    appId: "1:827880346998:web:c1b171aa50de30afec1657",
    measurementId: "G-46YH87KDF7"
};

const firebaseeApp = firebase.initializeApp(firebaseConfig);
const db = firebaseeApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;