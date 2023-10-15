import React, { useEffect, useState } from "react";
import { useCommentContext } from "./CommentProvider";
import { DocObject, getDisplayNameFromEmail } from "@/firebase/getData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { format } from "date-fns";
import Loading from "./Loading";

export const revalidate = 0;

export default function CommentOutput() {
  const { comments } = useCommentContext();
  const [commentLinkedData, setCommentLinkedData] = useState<
    DocObject[] | null
  >(null);

  useEffect(() => {
    if (!comments) {
      return console.log("No comments yet.");
    }
    async function fetchCommentLinkedData() {
      const data: DocObject[] = [];
      for (const comment of comments!) {
        const displayName = await getDisplayNameFromEmail(comment.data.email);
        data.push({ id: comment.id, data: { ...comment.data, displayName } });
      }
      setCommentLinkedData(data);
    }
    fetchCommentLinkedData();
  }, [comments]);

  return !commentLinkedData ? (
    <Loading></Loading>
  ) : commentLinkedData.length == 0 ? (
    <p className="text-small_paragraph">no comments yet!</p>
  ) : (
    <div className="flex flex-col justify-center items-center space-y-4">
      {commentLinkedData?.map((comment) => (
        <Card className="w-full" key={comment.id}>
          <CardHeader>
            <CardTitle className="text-sm">
              {comment.data.displayName}
            </CardTitle>
            <CardDescription className="text-xs">
              {comment
                ? format(comment.data.timestamp?.toDate(), "dd-MM-yyyy h:mm bb")
                : ""}
            </CardDescription>
          </CardHeader>
          <CardContent className="written-content text-xs">
            <pre>{comment.data.text}</pre>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
