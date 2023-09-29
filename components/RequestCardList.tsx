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

interface RequestCardListProps {
  docArray: DocObject[];
}

function RequestCardList({ docArray }: RequestCardListProps) {
  return docArray.map((doc) => (
    <Dialog key={doc.id}>
      <DialogTrigger asChild>
        <Card className="request-card">
          <CardHeader>
            <CardTitle className="text-center">{doc.data.topicTitle}</CardTitle>
            <CardDescription className="text-center">
              requested by {doc.data.displayName}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="dialog-content">
        <DialogHeader>
          <DialogTitle className="text-left">{doc.data.topicTitle}</DialogTitle>
          <DialogDescription className="text-left">
            requested by {doc.data.displayName}
          </DialogDescription>
        </DialogHeader>
        <p className="text-base">&#34;{doc.data.topicDescription}&#34;</p>
      </DialogContent>
    </Dialog>
  ));
}

export default RequestCardList;
