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
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/components/AuthProvider";
import { DocObject, getDocument } from "@/firebase/getData";
import { Collection } from "@/firebase/firebase.config";
import { updateDocument } from "@/firebase/updateData";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const requestSchema = z.object({
  requesterEmail: z.string().email(),
  requesterDisplayName: z.string().min(1),
  topicTitle: z
    .string()
    .min(1, {
      message: "could you be a bit more specific?",
    })
    .max(30, {
      message: "you've passed the character limit!",
    }),
  topicDescription: z
    .string()
    .min(1, {
      message: "even a brief description would help!",
    })
    .max(250, {
      message: "you've passed the character limit!",
    }),
});

export default function EditRequestForm() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const router = useRouter();
  const [doc, setDoc] = useState<DocObject | null>(null);
  const [topicTitle, setTopicTitle] = useState<string>("");
  const [topicDescription, setTopicDescription] = useState<string>("");

  const requesterEmail = user!.email!;
  const requesterDisplayName = user!.displayName!;

  const requestForm = useForm<z.infer<typeof requestSchema>>({
    mode: `onChange`,
    resolver: zodResolver(requestSchema),
    defaultValues: {
      requesterEmail,
      requesterDisplayName,
      topicTitle,
      topicDescription,
    },
  });

  useEffect(() => {
    async function getRequest() {
      try {
        const { result, error } = await getDocument(
          Collection.requests,
          id as string
        );
        if (error) {
          console.error("Error getting request data: ", error);
        } else {
          setDoc(result);
          setTopicTitle(result?.data.topicTitle);
          setTopicDescription(result?.data.topicDescription);

          const initialValues = {
            requesterEmail: user!.email!,
            requesterDisplayName: user!.displayName!,
            topicTitle: result?.data.topicTitle || "",
            topicDescription: result?.data.topicDescription || "",
          };

          requestForm.reset(initialValues);
        }
      } catch (error) {
        console.error("Error getting request data: ", error);
      }
    }

    getRequest();
  }, [topicTitle, topicDescription, id, requestForm, user]);

  console.log("done!");
  console.log(topicTitle);
  console.log(topicDescription);

  async function updateRequest(values: z.infer<typeof requestSchema>) {
    const { error } = await updateDocument(Collection.requests, id as string, {
      topicTitle: values.topicTitle,
      topicDescription: values.topicDescription,
    });
    if (error) {
      return console.error("Error updating request: ", error);
    }
    window.location.href = "/requests";
  }

  function onSubmit(values: z.infer<typeof requestSchema>) {
    updateRequest(values);
  }

  return (
    <>
      {doc ? (
        <>
          {doc!.data.email === user?.email ? (
            <Form {...requestForm}>
              <form
                onSubmit={requestForm.handleSubmit(onSubmit)}
                className="form"
              >
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
                          // defaultValue={doc.data.topicTitle}
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
                          rows={3}
                          {...field}
                          // defaultValue={doc.data.topicDescription}
                        ></Textarea>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                ></FormField>
                <Button
                  type="submit"
                  className="button button_hover_scale button_active_scale"
                >
                  send your request over!
                </Button>
              </form>
            </Form>
          ) : (
            <div className="flex justify-center items-center flex-col gap-8 pt-2">
              <h2 className="text text_heading">no access!</h2>
              <p className="text text_paragraph">
                you don&apos;t have permission to edit this request!
              </p>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
