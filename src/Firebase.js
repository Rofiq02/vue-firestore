import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDi9_QCS04-BN_ZECtiX8pfHpEHfheiNjA",
    authDomain: "firestore-f3006.firebaseapp.com",
    databaseURL: "https://firestore-f3006.firebaseio.com",
    projectId: "firestore-f3006",
    storageBucket: "firestore-f3006.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings({});

export default firebase;