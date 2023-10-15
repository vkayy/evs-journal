"use client";

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
import CommentForm from "./CommentForm";
import CardSeparator from "./CardSeparator";
import CommentOutput from "./CommentOutput";

function CommentSection() {
  return (
    <Card className="comment-card">
      <CardHeader>
        <CardTitle>idea section</CardTitle>
        <CardDescription>freely share your thoughts, and see what others think!</CardDescription>
      </CardHeader>
      <CardSeparator></CardSeparator>
      <CardContent>
        <div className="comment-form-container">
          <CommentForm></CommentForm>
        </div>
      </CardContent>
      <CardSeparator></CardSeparator>
      <CardFooter>
        <div className="w-full">
            <h2 className="text-sm">community ideas</h2>
            <br />
          <CommentOutput></CommentOutput>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CommentSection;
