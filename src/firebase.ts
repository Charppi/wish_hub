import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage";
import { Customers } from "./models/customers";
import { Olts } from "./models/olts";
import { Routers } from "./models/routers";
import { Users } from "./models/users";
import { Zones } from "./models/zones";

const firebaseConfig = {
    apiKey: "AIzaSyAV8IlwwOu0w0gE90L2sicpSUO8kYHF_b4",
    authDomain: "wishbub-ef8f0.firebaseapp.com",
    projectId: "wishbub-ef8f0",
    storageBucket: "wishbub-ef8f0.appspot.com",
    messagingSenderId: "970178217321",
    appId: "1:970178217321:web:801a20723ba87a2f9ba9f8",
    measurementId: "G-GYPWL5NST1"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

export const storage = firebase.storage().ref()

const converter = <T>() => ({
    toFirestore: (data: T) => data,
    fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
        snap.data() as T
})

const dataPoint = <T>(collectionPath: string) => firestore.collection(collectionPath).withConverter(converter<T>())

export const db = {
    users: dataPoint<Users>('users'),
    zones: dataPoint<Zones>('zones'),
    routers: dataPoint<Routers>('routers'),
    olts: dataPoint<Olts>('olts'),
    customers: dataPoint<Customers>('customers'),
}

