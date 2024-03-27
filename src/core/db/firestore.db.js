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