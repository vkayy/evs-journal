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
import CommentSection from "./CommentSection";
import CardSeparator from "./CardSeparator";
import EntryButtons from "./EntryButtons";

interface EntryOutputProps {
  entry: DocObject;
}

async function EntryOutput({ entry }: EntryOutputProps) {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
      <Card className="entry-output-card">
        <CardHeader>
          <CardTitle className="entry-card__title">
            {format(entry.data.date.toDate(), "dd-MM-yyyy")}
          </CardTitle>
          <h1 className="entry-card__heading">{entry.data.topic}</h1>
          <CardDescription className="entry-card__description">
            {entry.data.description}
          </CardDescription>
        </CardHeader>
        <CardSeparator></CardSeparator>
        <CardContent>
          <article className="entry-card__article">
            <p className="written-content">{entry.data.content}</p>
          </article>
        </CardContent>
        <CardFooter>
          <EntryLikeButton></EntryLikeButton>
        </CardFooter>
        <EntryButtons entry={entry}></EntryButtons>
      </Card>
      <CommentSection></CommentSection>
    </div>
  );
}

export default EntryOutput;
