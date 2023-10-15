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
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const entrySchema = z.object({
  authors: z.string().min(1, {
    message: "don't forget the authors!",
  }),
  topic: z
    .string()
    .min(1, {
      message: "could this be a little clearer?",
    })
    .max(30, {
      message: "a little more concise!",
    }),
  description: z
    .string()
    .min(1, {
      message: "descriptions are supposed to be descriptive...",
    })
    .max(63, {
      message: "save something for the content!",
    }),
  content: z.string().min(1, {
    message: "could you be a bit more informative?",
  }),
  // date: z.date({
  //   required_error: "you need a date!",
  // }),
});

export default function EditEntryForm() {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [doc, setDoc] = useState<DocObject | null>(null);
  const [authors, setAuthors] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const entryForm = useForm<z.infer<typeof entrySchema>>({
    mode: `onChange`,
    resolver: zodResolver(entrySchema),
    defaultValues: {
      authors: "",
      topic: "",
      description: "",
      content: "",
    },
  });

  useEffect(() => {
    async function getEntry() {
      try {
        const { result, error } = await getDocument(
          Collection.entries,
          id as string
        );
        if (error) {
          console.error("Error getting request data: ", error);
        } else {
          setDoc(result);
          setAuthors(result?.data.authors);
          setTopic(result?.data.topic);
          setDescription(result?.data.description);
          setContent(result?.data.content);

          const initialValues = {
            authors: result?.data.authors || "",
            topic: result?.data.topic || "",
            description: result?.data.description || "",
            content: result?.data.content || "",
          };

          entryForm.reset(initialValues);
        }
      } catch (error) {
        console.error("Error getting entry data: ", error);
      }
    }
    getEntry();
  }, [authors, topic, description, content, id, entryForm]);

  async function updateEntry(values: z.infer<typeof entrySchema>) {
    const { error } = await updateDocument(Collection.entries, id as string, {
      authors: values.authors,
      topic: values.topic,
      description: values.description,
      content: values.content,
    });
    if (error) {
      return console.error("Error updating entry: ", error);
    }
    window.location.replace(`/journal/${id}`);
  }

  function onSubmit(values: z.infer<typeof entrySchema>) {
    updateEntry(values);
  }

  return (
    <>
      {doc ? (
        <>
          {user?.email == "vkrice2475@gmail.com" ||
          user?.email == "elenashannae21@gmaik.com" ? (
            <Form {...entryForm}>
              <form
                onSubmit={entryForm.handleSubmit(onSubmit)}
                className="form"
              >
                <FormField
                  control={entryForm.control}
                  name="authors"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>authors</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="..."></SelectValue>
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="e">e</SelectItem>
                          <SelectItem value="v">v</SelectItem>
                          <SelectItem value="ev">e and v &lt;3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={entryForm.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>topic</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="state your topic..."
                          {...field}
                          disabled
                        ></Input>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={entryForm.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="give a brief description on the topic..."
                          rows={3}
                          {...field}
                        ></Textarea>
                      </FormControl>
                      <FormMessage></FormMessage>
                    </FormItem>
                  )}
                ></FormField>
                <FormField
                  control={entryForm.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="express yourself!"
                          rows={10}
                          {...field}
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
                  write your entry!
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
