"use client";

import {
  browserSessionPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { app } from "@/firebase/firebase.config";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "please enter your email!",
    })
    .email({
      message: "not a valid email!",
    }),
  password: z.string().min(1, {
    message: "please enter your password!"
  }),
});

export default function LoginForm() {
  const router = useRouter();

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    const auth = getAuth(app);
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            router.push("/");
          })
          .catch((error) => {
            toast({
              variant: "destructive",
              title: "oops, try again!",
              description: "the details you entered don't match :(",
            });
            console.error("Error logging user in: ", error);
          });
      })
      .catch((error) => {
        console.error("Error setting browser persistence: ", error);
      });
  }

  return (
    <>
      <Card className="login-card">
        <CardContent>
          <Form {...loginForm}>
            <form
              className="form py-4"
              onSubmit={loginForm.handleSubmit(onSubmit)}
            >
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>email</FormLabel>
                    <FormControl>
                      <Input {...field}></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field}></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              ></FormField>
              <Button type="submit">log in!</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="link-container">
        <Link href="/signup" className="link">
          haven&apos;t signed up yet?
        </Link>
      </div>
    </>
  );
}
