import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export interface UserFields {
  displayName: string;
  profilePicture: string;
}

export interface EntryFields {
  authors: string[];
  title: string;
  description: string;
  content: string;
}

export interface CommentFields {
  entryID: string;
  email: string;
  parentCommentID: string;
  text: string;
  timestamp: Date;
}

export interface EntryLikeFields {
  email: string;
  entryID: string;
}

export interface RequestFields {
  email: string;
  topicTitle: string;
  topicDescription: string;
}

export interface CommentLikeFields {
  email: string;
  commentID: string;
}

export enum Collection {
  users = "users",
  entries = "entries",
  comments = "comments",
  entryLikes = "entryLikes",
  commentLikes = "commentLikes",
  requests = "requests",
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
