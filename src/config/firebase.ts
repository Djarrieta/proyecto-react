import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage";
import { firebaseConfig } from "./firebaseConfig";


const Firebase =firebase.initializeApp(firebaseConfig);
export const firebaseDate=firebase.firestore.FieldValue.serverTimestamp()
export const firebaseAuth=Firebase.auth()
export const firebaseDB=Firebase.firestore()
export const firebaseStorage=Firebase.storage()
export const firebaseArrayAdd= (data:any)=> firebase.firestore.FieldValue.arrayUnion(data)