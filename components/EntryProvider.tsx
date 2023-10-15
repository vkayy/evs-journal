"use client";

import { createContext, useContext } from "react";

interface EntryProviderProps {
  children: React.ReactNode;
  entryID: string;
}

export const EntryContext = createContext<{ entryID: string | null }>({
  entryID: null,
});
export const useEntryContext = () => useContext(EntryContext);

export default function EntryProvider({
  children,
  entryID,
}: EntryProviderProps) {
  return (
    <EntryContext.Provider value={{ entryID }}>
      {children}
    </EntryContext.Provider>
  );
}
