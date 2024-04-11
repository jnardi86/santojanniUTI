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

  // getSubCollection

  const getSubcollections = async (userDocRef) => {
    const subcollectionRefs = [
      // Add references to all subcollections you want to retrieve data from
      collection(userDocRef, 'calificaciones'), // Replace 'calificaciones' with actual names
      // collection(userDocRef, 'anotherSubcollection'), // Add additional subcollections (if needed)
    ];
  
    const subcollectionData = [];
    for (const subcollectionRef of subcollectionRefs) {
      const subcollectionSnap = await getDocs(subcollectionRef);
      const subcollectionDocs = await getDocuments(subcollectionRef.path); // Use provided getDocuments function
      subcollectionData.push(...subcollectionDocs);
    }
  
    return subcollectionData;
  }

//getDocumentByIdWithSubCollection

export const getDocumentByIdWithSubCollection = async (id, name) => {
  const docRef = doc(db, name, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const subcollection = await getSubcollections(docRef)
    return { id: docSnap.id, ...docSnap.data(), ...subcollection };
  } else {
    return null;
  }
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
    PERFILES: "perfiles",
    FAVORITES: "favorites",
  };

  export const addCalificacion = async (userId, calificacionData) => {
    try {
      // Get a reference to the user document
      // const userRef = db.collection(COLECTIONS.PERFILES).doc(userId);
      const userRef = doc(db, COLECTIONS.PERFILES, userId)
      // Create a document within the "calificaciones" subcollection
      const calificacionRef = await addDoc(collection(userRef, 'calificaciones'), calificacionData);
      console.log('Calificación agregada exitosamente con ID:', calificacionRef.id, calificacionRef.puntaje);
    } catch (error) {
      console.error('Error al agregar calificación:', error);
    }
  }

