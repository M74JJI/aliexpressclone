import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAoLXXG813PrkTlyPpco7LvZqN__gDwQqM',
    authDomain: 'ecomlogin-45133.firebaseapp.com',
    projectId: 'ecomlogin-45133',
    storageBucket: 'ecomlogin-45133.appspot.com',
    messagingSenderId: '667464487513',
    appId: '1:667464487513:web:618ed377d602077fe69748',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
