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

interface RequestCardListProps {
  docArray: DocObject[];
}

function RequestCardList({ docArray }: RequestCardListProps) {
  const { user } = useAuthContext();
  const router = useRouter();

  return docArray.map((doc) => (
    <div className="request-item">
      <Dialog key={doc.id}>
        <DialogTrigger asChild>
          <Card className="request-card">
            <CardHeader>
              <CardTitle className="text-center">
                {doc.data.topicTitle}
              </CardTitle>
              <CardDescription className="text-center">
                requested by {doc.data.email === user?.email ? "you" : doc.data.displayName}
              </CardDescription>
            </CardHeader>
          </Card>
        </DialogTrigger>
        <DialogContent className="dialog-content">
          <DialogHeader>
            <DialogTitle className="text-left">
              {doc.data.topicTitle}
            </DialogTitle>
            <DialogDescription className="text-left">
              requested by {doc.data.email === user?.email ? "you" : doc.data.displayName}
            </DialogDescription>
          </DialogHeader>
          <p className="text-base">&#34;{doc.data.topicDescription}&#34;</p>
          {user?.email === doc.data.email ? (
            <div className="request-card__button-container">
              <Button variant="outline" className="request-card__button" onClick={() => {
                router.push(`/requests/${doc.id}/`)
              }}>
                edit request
              </Button>
              <Button
                variant="outline"
                className="request-card__button"
                onClick={() => {
                  deleteDocument(Collection.requests, doc.id);
                  window.location.reload();
                }}
              >
                delete request
              </Button>
            </div>
          ) : (
            <></>
          )}
        </DialogContent>
      </Dialog>
    </div>
  ));
}

export default RequestCardList;
