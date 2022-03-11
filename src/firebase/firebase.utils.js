import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDT0w7O4DHVbIslm3cp5dcRxaSMicw39vY",
    authDomain: "ecommerceproject-b8451.firebaseapp.com",
    projectId: "ecommerceproject-b8451",
    storageBucket: "ecommerceproject-b8451.appspot.com",
    messagingSenderId: "728068748286",
    appId: "1:728068748286:web:899284ea84ccc0731f46af",
    measurementId: "G-DQNV764KQZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;