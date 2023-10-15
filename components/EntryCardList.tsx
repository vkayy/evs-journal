"use client";

import { DocObject } from "@/firebase/getData";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useAuthContext } from "./AuthProvider";
import { Button } from "./ui/button";
import { deleteDocument } from "@/firebase/deleteData";
import { Collection } from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";
import RequestLikeButton from "./RequestLikeButton";
import { Timestamp } from "firebase/firestore";

interface EntryCardListProps {
  docArray: DocObject[];
}

function EntryCardList({ docArray }: EntryCardListProps) {
  const { user } = useAuthContext();
  const router = useRouter();

  function getAuthorText(authors: string, email: string) {
    if (authors == "ev") {
      if (email == "elenashannae21@gmail.com") {
        return "you and v";
      } else if (email == "vkrice2475@gmail.com") {
        return "you and e";
      } else {
        return "ev <3";
      }
    } else if (authors == "e") {
      if (email != "elenashannae21@gmail.com") {
        return "e";
      }
    } else {
      if (email != "vkrice2475@gmail.com") {
        return "v";
      }
    }
    return "you";
  }

  return docArray.map((doc) => (
    <div className="request-item" key={doc.id}>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="request-card">
            <CardHeader>
              <CardTitle className="text-center">{doc.data.topic}</CardTitle>
              <CardDescription className="text-center">
                written by {getAuthorText(doc.data.authors, user?.email!)}
              </CardDescription>
            </CardHeader>
          </Card>
        </DialogTrigger>
        <DialogContent className="dialog-content">
          <DialogHeader>
            <DialogTitle className="text-left">{doc.data.topic}</DialogTitle>
            <DialogDescription className="text-left">
              written by {getAuthorText(doc.data.authors, user?.email!)}
            </DialogDescription>
          </DialogHeader>
          <p className="text-base">{doc.data.description}</p>

          <div className="entry-card__button-container">
            <Button
              variant="default"
              className="entry-card__button"
              onClick={() => {
                window.location.replace(`/journal/${doc.id}/`);
              }}
            >
              read this entry!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  ));
}

export default EntryCardList;
