import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA3Sxeqq1TzwhviyF_Sk1QxUQBcze4OFrM",
    authDomain: "wabot-e31d0.firebaseapp.com",
    projectId: "wabot-e31d0",
    storageBucket: "wabot-e31d0.appspot.com",
    messagingSenderId: "990722111591",
    appId: "1:990722111591:web:e13fa02c603f2b42b6fcc2",
    measurementId: "G-F2LBB12EPP"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const db = firebase.firestore()