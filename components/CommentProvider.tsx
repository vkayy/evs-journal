"use client";

import { DocObject, getDocsInColnByField } from "@/firebase/getData";
import { createContext, useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { Collection } from "@/firebase/firebase.config";
import { useEntryContext } from "./EntryProvider";

interface CommentProviderProps {
  children: React.ReactNode;
}

export const CommentContext = createContext<{ comments: DocObject[] | null }>({
  comments: null,
});
export const useCommentContext = () => useContext(CommentContext);

export function CommentProvider({ children }: CommentProviderProps) {
  const { entryID } = useEntryContext();
  const [comments, setComments] = useState<DocObject[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      const { result } = await getDocsInColnByField(
        Collection.comments,
        "entryID",
        entryID!
      );
      setComments(result);
    }
    fetchComments();
    setLoading(false);
  }, []);

  return (
    <CommentContext.Provider value={{ comments }}>
      {loading ? <Loading></Loading> : children}
    </CommentContext.Provider>
  );
}
