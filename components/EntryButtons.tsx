"use client";

import { DocObject } from "@/firebase/getData";
import React from "react";
import { useAuthContext } from "./AuthProvider";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { deleteDocument } from "@/firebase/deleteData";
import { Collection } from "@/firebase/firebase.config";

interface EntryButtonsProps {
  entry: DocObject;
}

function EntryButtons({ entry }: EntryButtonsProps) {
  const { user } = useAuthContext();
  const router = useRouter();
  return (
    <>
      {user?.email == "vkrice2475@gmail.com" ||
      user?.email == "elenashannae21@gmail.com" ? (
        <div className="entry-card__button-container">
          <Button
            variant="outline"
            className="entry-card__button w-full"
            onClick={() => {
              router.push(`/journal/edit/${entry.id}/`);
            }}
          >
            edit entry
          </Button>
          <Button
            variant="outline"
            className="entry-card__button w-full"
            onClick={() => {
              async function handleDelete() {
                await deleteDocument(Collection.entries, entry.id);
                window.location.reload();
              }
              handleDelete();
            }}
          >
            delete entry
          </Button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default EntryButtons;
