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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { addEntry } from "@/firebase/addData";

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

export default function EntryForm() {
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

  async function onSubmit(values: z.infer<typeof entrySchema>) {
    await addEntry(
      // values.date,
      values.authors,
      values.topic,
      values.description,
      values.content
    );
    window.location.replace(`/journal/${values.topic.split(" ").join("-")}`);
  }

  return (
    <>
      <Form {...entryForm}>
        <form
          onSubmit={entryForm.handleSubmit(onSubmit)}
          className="form max-w-full"
        >
          {/* <FormField
            control={entryForm.control}
            name="date"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>date</FormLabel>
                <br />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "dd-MM-yyyy")
                        ) : (
                          <span>...</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"></CalendarIcon>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("2023-06-23")
                      }
                      initialFocus
                    ></Calendar>
                  </PopoverContent>
                </Popover>
                <FormMessage></FormMessage>
              </FormItem>
            )}
          ></FormField> */}
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
                  <Input placeholder="state your topic..." {...field}></Input>
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
    </>
  );
}
