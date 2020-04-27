import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABKuxeybYP8sA6wUbrZuJ_dcTNfXf5pAM",
    authDomain: "crwn-db-c02d2.firebaseapp.com",
    databaseURL: "https://crwn-db-c02d2.firebaseio.com",
    projectId: "crwn-db-c02d2",
    storageBucket: "crwn-db-c02d2.appspot.com",
    messagingSenderId: "592827150480",
    appId: "1:592827150480:web:75537c65a804420b9d2815"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;