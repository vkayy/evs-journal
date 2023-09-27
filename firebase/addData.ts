import { app, db } from "./firebase.config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

export async function addDataAutoID(coln: string, data: object) {
  let result = null;
  let error = null;

  try {
    (result = await addDoc(collection(db, coln), data)),
      {
        merge: true,
      };
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function addDataSetID(coln: string, id: string, data: object) {
  let result = null;
  let error;

  try {
    (result = await setDoc(doc(db, coln, id), data)),
      {
        merge: true,
      };
  } catch (e) {
    error = e;
  }

  return { result, error };
}
