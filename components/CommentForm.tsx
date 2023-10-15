"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useAuthContext } from "./AuthProvider";
import { addComment } from "@/firebase/addData";
import { useEntryContext } from "./EntryProvider";

const commentSchema = z.object({
  text: z.string().min(1, {
    message: "not much to say..?",
  }),
});

function CommentForm() {
  const { entryID } = useEntryContext();
  const commentForm = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      text: "",
    },
  });

  const { user } = useAuthContext();

  async function onSubmit(values: z.infer<typeof commentSchema>) {
    if (user) {
      await addComment(entryID!, user.email!, null, values.text);
      window.location.reload();
    } else {
      window.location.replace("/login");
    }
  }

  return (
    <>
      <Form {...commentForm}>
        <form
          onSubmit={commentForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={commentForm.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormItem>
                  <FormLabel>your idea</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      placeholder="express yourself!"
                      {...field}
                    ></Textarea>
                  </FormControl>
                </FormItem>
              </FormItem>
            )}
          ></FormField>
          <Button type="submit" className="w-full" variant="outline">
            share your thought!
          </Button>
        </form>
      </Form>
    </>
  );
}

export default CommentForm;
