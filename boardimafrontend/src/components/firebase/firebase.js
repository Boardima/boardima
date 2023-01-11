import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAKz-zaramZh18t5XPmpZoCrtYMEJ43S9k",
  authDomain: "uploadingimage-96287.firebaseapp.com",
  projectId: "uploadingimage-96287",
  storageBucket: "uploadingimage-96287.appspot.com",
  messagingSenderId: "466497937015",
  appId: "1:466497937015:web:5727f2019206bf90c2b072"
};

// Initialize Firebase
const formcontent = initializeApp(firebaseConfig);
export const storage = getStorage(formcontent)