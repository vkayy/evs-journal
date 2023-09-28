"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useAuthContext } from "./AuthProvider";
import { addDataAutoID, addDataSetID } from "@/firebase/addData";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const requestSchema = z.object({
  requesterEmail: z.string().email(),
  requesterDisplayName: z.string().min(1),
  topicTitle: z
    .string()
    .min(1, {
      message:
        "could you be a bit more specific? we might not know what you mean!",
    })
    .max(30, {
      message: "you've passed the character limit!",
    }),
  topicDescription: z
    .string()
    .min(1, {
      message: "even a brief description would help us out a lot!",
    })
    .max(250, {
      message: "you've passed the character limit!",
    }),
});

function TopicRequestForm() {
  const router = useRouter();

  const { user } = useAuthContext();

  const requesterEmail = user!.email!;
  const requesterDisplayName = user!.displayName!;

  const requestForm = useForm<z.infer<typeof requestSchema>>({
    mode: `onChange`,
    resolver: zodResolver(requestSchema),
    defaultValues: {
      requesterEmail,
      requesterDisplayName,
      topicTitle: "",
      topicDescription: "",
    },
  });

  async function addRequest(values: z.infer<typeof requestSchema>) {
    const { error } = await addDataAutoID("requests", values);
    if (error) {
      toast({
        variant: "destructive",
        title: "oh no, try again!",
        description: "there was an issue sending your request :(",
      });
      console.error("Error adding request: ", error);
    }
    toast({
      title: `thanks, ${values.requesterDisplayName}!`,
      description: "we'll check out your request asap!",
    });
    router.push("/journal");
  }

  function onSubmit(values: z.infer<typeof requestSchema>) {
    addRequest(values);
  }

  return (
    <Form {...requestForm}>
      <form onSubmit={requestForm.handleSubmit(onSubmit)} className="form">
        <FormField
          control={requestForm.control}
          name="requesterEmail"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>your account email</FormLabel>
              <FormControl>
                <Input {...field} disabled></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={requestForm.control}
          name="requesterDisplayName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>your display name</FormLabel>
              <FormControl>
                <Input {...field} disabled></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={requestForm.control}
          name="topicTitle"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>topic title</FormLabel>
              <FormControl>
                <Input
                  placeholder="give us a general title..."
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={requestForm.control}
          name="topicDescription"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>topic description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="tell us a little more about your interest..."
                  rows={6}
                  {...field}
                ></Textarea>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <Button type="submit" className="button button_active_scale">
          send your request over!
        </Button>
      </form>
    </Form>
  );
}

export default TopicRequestForm;
