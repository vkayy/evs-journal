"use client";

import { doc, updateDoc } from "firebase/firestore";
import { Collection, db } from "./firebase.config";

export async function updateDocument(
  coln: Collection,
  id: string,
  updatedData: object
) {
  let result = null;
  let error = null;

  let docRef = doc(db, coln, id);

  try {
    result = await updateDoc(docRef, updatedData);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
