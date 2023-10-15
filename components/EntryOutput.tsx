import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DocObject } from "@/firebase/getData";
import { format } from "date-fns";
import EntryLikeButton from "./EntryLikeButton";

interface EntryOutputProps {
  entry: DocObject;
}

function EntryOutput({ entry }: EntryOutputProps) {
  return (
    <>
      <Card className="max-w-2xl mx-auto px-4 sm:px-8 pt-2 pb-4 mt-16 md:mt-40">
        <CardHeader>
          <CardTitle className="text-left text-lg text-[--muted-foreground]">
            {format(entry.data.date.toDate(), "dd-MM-yyyy")}
          </CardTitle>
          <br />
          <h1 className="text-left text_heading">{entry.data.topic}</h1>
          <CardDescription className="text-left text-base">
            {entry.data.description}
          </CardDescription>
          <br />
        </CardHeader>
        <CardContent>
          <article className="text-left">
            <p className="whitespace-pre-line">{entry.data.content}</p>
          </article>
        </CardContent>
        <CardFooter>
          <EntryLikeButton entryID={entry.id}></EntryLikeButton>
        </CardFooter>
      </Card>
    </>
  );
}

export default EntryOutput;
