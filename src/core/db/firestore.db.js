import { db } from "../config/firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";


/**GET_DOCUMENTS 
 * recibe como argumento el nombre de la colection y retorna todos los documentos
*/
export const getDocuments = async (name) => {

  const querySnapshot = await getDocs(collection(db, name));
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data
};

/**GET_DOCUMENTS_BY_ID
 * recibe como argumento el nombre de la colection y el id del documento
 */
export const getDocumentById = async (id, name) => {
  const docRef = doc(db, name, id);
  const docSnap = await getDoc(docRef);


  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    return null;
  }
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


/**GET_DOCUMENTS_BY_ID_WITH_SUBCOLECTION
 * recibe como argumento el nombre de la colection y el id del documento
 * retorna ??? jaja  */
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

/**GET_SUBCOLLECTIONS
 * recibe como argumento el nombre de la colection y el id del documento
 * retorna ??? jaja  */
export const getSubCollections = async (id, name) => {
  const docRef = doc(db, name, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const subcollection = await getSubcollections(docRef)
    return subcollection;
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

  const response = {
    status: null,
    error: null
  }

  try {
    await setDoc(doc(db, name, id), data)
    response.status = true;

  } catch (error) {
    response.error = error;
    response.status = false;
  }


  return response;
}

export const COLECTIONS = {
  PERFILES: "perfiles",
  FAVORITES: "favorites",
};

export const addCalificacion = async (userId, calificacionData) => {
  try {
    // Get a reference to the user document
    const userRef = doc(db, COLECTIONS.PERFILES, userId)
    // Create a document within the "calificaciones" subcollection
    const calificacionRef = await addDoc(collection(userRef, 'calificaciones'), calificacionData);
    console.log('Calificación agregada exitosamente con ID:', calificacionRef.id, calificacionRef.puntaje);
  } catch (error) {
    console.error('Error al agregar calificación:', error);
  }
}

export const setCalificacion = async (userId, calificacionData) => {
  const response = {
    status: null,
    error: null
  }

  try {
    // Get a reference to the user's "calificaciones" subcollection
    const path = `${COLECTIONS.PERFILES}/${userId}/calificaciones`;
    const calificacionesRef = collection(db, path);

    // Create a document reference with a custom ID
    const calificacionDocRef = doc(calificacionesRef, calificacionData.id);

    // Set the data for the document
    await setDoc(calificacionDocRef, { score: calificacionData.score, quizNumber: calificacionData.quizNumber,  quizTitle: calificacionData.quizTitle});
    response.status = true;
  } catch (error) {
    response.status = false;
    response.error = error;
  }
  
  return response;
}

