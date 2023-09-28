"use client";

import { toast } from "@/components/ui/use-toast";
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

export async function addUser(email: string, displayName: string) {
  const { error } = await addDataSetID("users", email, {
    displayName,
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue signing you up. try again?",
    });
    console.error("Error adding user to database: ", error);
  }
}

export async function addComment(
  entryID: string,
  email: string,
  parentCommentID: string | null,
  text: string,
) {
  const { error } = await addDataAutoID("comments", {
    entryID,
    email,
    parentCommentID,
    text,
    timestamp: new Date(),
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue saving your comment. try again?",
    });
    console.error("Error adding comment to database: ", error);
  }
}

export async function addEntry(
  authors: string[],
  title: string,
  description: string,
  content: string
) {
  const { error } = await addDataAutoID("entries", {
    authors,
    title,
    description,
    content,
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue saving your comment. try again?",
    });
    console.error("Error adding comment to database: ", error);
  }
}

export async function addEntryLike(
  email: string,
  commentID: string,
) {
  const { error } = await addDataAutoID("entries", {
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue saving your comment. try again?",
    });
    console.error("Error adding comment to database: ", error);
  }
}
