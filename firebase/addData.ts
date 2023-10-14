"use client";

import { toast } from "@/components/ui/use-toast";
import { Collection, db } from "./firebase.config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

export async function addDataAutoID(coln: Collection, data: object) {
  let result = null;
  let error = null;

  let colnRef = collection(db, coln);

  try {
    (result = await addDoc(colnRef, data)),
      {
        merge: true,
      };
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function addDataSetID(coln: Collection, id: string, data: object) {
  let result = null;
  let error;

  let docRef = doc(db, coln, id);

  try {
    (result = await setDoc(docRef, data)),
      {
        merge: true,
      };
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function addUser(email: string, displayName: string) {
  const { error } = await addDataSetID(Collection.users, email, {
    displayName,
    profilePicture: "",
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
  text: string
) {
  const { error } = await addDataAutoID(Collection.comments, {
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
  const { error } = await addDataAutoID(Collection.entries, {
    authors,
    title,
    description,
    content,
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue posting your entry. try again?",
    });
    console.error("Error adding entry to database: ", error);
  }
}

export async function addEntryLike(email: string, entryID: string) {
  const { error } = await addDataAutoID(Collection.entryLikes, {
    email,
    entryID,
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue liking the entry. try again?",
    });
    console.error("Error adding entry like to database: ", error);
  }
}

export async function addCommentLike(email: string, commentID: string) {
  const { error } = await addDataAutoID(Collection.commentLikes, {
    email,
    commentID,
  });

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue liking the comment. try again?",
    });
    console.error("Error adding comment like to database: ", error);
  }
}

export async function addRequestLike(email: string, requestID: string) {
  const { error } = await addDataSetID(
    Collection.requestLikes,
    email + requestID,
    {
      email,
      requestID,
    }
  );

  if (error) {
    toast({
      variant: "destructive",
      title: "oops! :(",
      description: "there was an issue liking the comment. try again?",
    });
    console.error("Error adding comment like to database: ", error);
  }
}
