import {
  DocumentData,
  collection,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Collection, db } from "./firebase.config";

export interface DocObject {
  id: string;
  data: DocumentData;
}

export async function getDocument(coln: Collection, id: string) {
  let result: DocObject | null = null;
  let error = null;

  let docRef = doc(db, coln, id);

  try {
    const docSnapshot = await getDoc(docRef);
    result = { id: docSnapshot.id, data: docSnapshot.data()! };
  } catch (e) {
    error = e;
    console.error("Error retrieving doc from database: ", error);
  }

  return { result, error };
}

export async function getCollection(coln: Collection) {
  let result: DocObject[] | null = null;
  let error = null;

  let colnRef = collection(db, coln);

  try {
    const docsSnapshot = await getDocs(colnRef);
    result = [];
    docsSnapshot.forEach((docSnapshot) => {
      result!.push({ id: docSnapshot.id, data: docSnapshot.data() });
    });
  } catch (e) {
    error = e;
    console.error("Error retrieving collection from database: ", error);
  }

  return { result, error };
}

export async function getDocsInColnByField(
  coln: Collection,
  fieldName: string,
  fieldValue: string
) {
  let result: DocObject[] | null = null;
  let error = null;

  const docQuery = query(
    collection(db, coln),
    where(fieldName, "==", fieldValue)
  );
  try {
    const docQuerySnapshot = await getDocs(docQuery);
    result = [];
    docQuerySnapshot.forEach((docSnapshot) => {
      result!.push({ id: docSnapshot.id, data: docSnapshot.data() });
    });
  } catch (e) {
    error = e;
    console.error("Error retrieving queried docs from database: ", error);
  }

  return { result, error };
}

export async function getRequestLikeCount(requestID: string) {
  const requestLikes = collection(db, Collection.requestLikes);
  const countQuery = query(requestLikes, where("requestID", "==", requestID));

  let result: number | null = null;
  let error = null;

  try {
    const countSnapshot = await getCountFromServer(countQuery);
    result = countSnapshot.data().count;
  } catch (e) {
    error = e;
    console.error("Error retrieving request like count from database: ", error);
  }
}
