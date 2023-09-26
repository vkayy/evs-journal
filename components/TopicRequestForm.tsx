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
import { useAuthContext } from "./AuthContext";

const requestSchema = z.object({
  requester: z.string().min(1, {
    message: "crediting your idea is important to us!",
  }),
  topic: z.string().min(3, {
    message:
      "could you be a bit more specific? we might not know what you mean!",
  }),
});

function TopicRequestForm() {
  const { user } = useAuthContext();
  const requester = user ? user.displayName! : ""

  const requestForm = useForm<z.infer<typeof requestSchema>>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      requester,
      topic: "",
    },
  });

  function onSubmit(values: z.infer<typeof requestSchema>) {}

  return (
    <Form {...requestForm}>
      <form
        onSubmit={requestForm.handleSubmit(onSubmit)}
        className="form"
      >
        <FormField
          control={requestForm.control}
          name="requester"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>your name</FormLabel>
              <FormControl>
                <Input {...field}></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>

        <FormField
          control={requestForm.control}
          name="topic"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>your request</FormLabel>
              <FormControl>
                <Textarea {...field}></Textarea>
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
