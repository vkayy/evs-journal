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
    <Dialog>
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{doc.data.topicTitle}</DialogTitle>
          <DialogDescription>
            requested by {doc.data.displayName}
          </DialogDescription>
        </DialogHeader>
        <p className="text-base">{doc.data.topicDescription}</p>
      </DialogContent>
    </Dialog>
  ));
}

export default RequestCardList;
