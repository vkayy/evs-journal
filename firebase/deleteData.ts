import { deleteDoc, doc } from "firebase/firestore";
import { Collection, db } from "./firebase.config";

export async function deleteDocument(coln: Collection, id: string) {
  let result = null;
  let error = null;

  let docRef = doc(db, coln, id);

  try {
    result = await deleteDoc(docRef)
  } catch (e) {
    error = e;
  }
}
