import { db } from "../config/firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";


export const getDocuments = async (name) => {
    const querySnapshot = await getDocs(collection(db, name));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  
    return data;
  };

  export const getDocumentById = async (id, name) => {
    const docRef = doc(db, name, id);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  };

  export const getDocumentByEmail = async (email, name) => {
    const docRef = doc(db, name, email);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return { email: docSnap.email, ...docSnap.data() };
    } else {
      return null;
    }
  };


  export const createDocument = async (name, data) => {
    const refDoc = await addDoc(collection(db, name), data);
    return refDoc;
  };

  export const setDocument = async (name, data, id) => {
    const refDoc = await setDoc(doc(db, name, id), data)
    return refDoc;
  }

  export const COLECTIONS = {
    PERFILES: "pefiles",
    FAVORITES: "favorites",
  };