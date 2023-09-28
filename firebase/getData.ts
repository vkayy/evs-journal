import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Collection, db } from "./firebase.config";

export async function getDocument(coln: Collection, id: string) {
  let result;
  let error;

  let docRef = doc(db, coln, id);

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getCollection(coln: Collection) {
  let result = null;
  let error = null;

  let colnRef = collection(db, coln);

  try {
    result = await getDocs(colnRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function getDocsInColnByField(
  coln: Collection,
  fieldName: string,
  fieldValue: string
) {
  let result: string[] | null = null;
  let error = null;

  const docQuery = query(
    collection(db, coln),
    where(fieldName, "==", fieldValue)
  );
  try {
    const docQuerySnapshot = await getDocs(docQuery);
    result = [];
    docQuerySnapshot.forEach((doc) => {
      result!.push(doc.id);
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
