"use client";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  browserSessionPersistence,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { useForm } from "react-hook-form";
import { FirebaseError } from "firebase/app";
import { addDataSetID, addUser } from "@/firebase/addData";

const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, {
        message: "please enter your email!",
      })
      .email({
        message: "not a valid email!",
      }),
    displayName: z.string().min(1, {
      message: "please enter a display name!",
    }),
    password: z.string().min(8, {
      message: "password must be at least 8 characters!",
    }),
    confirmPassword: z.string().min(1, {
      message: "re-enter your password!",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "password doesn't match!",
  });

export default function SignupForm() {
  const router = useRouter();
  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    const auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: values.displayName,
            }).then(() => {
              addUser(user.email!, values.displayName).then(() => {
                window.location.replace("/");
              });
            });
          })
          .catch((error: FirebaseError) => {
            if (error.code == "auth/email-already-in-use") {
              toast({
                variant: "destructive",
                title: "email already in use! :(",
                description:
                  "an account exists with that email. try logging in!",
              });
              console.error("Error signing user up: ", error);
            } else {
              toast({
                variant: "destructive",
                title: "oops! :(",
                description: "there was an issue signing you up. try again?",
              });
              console.error("Error signing user up: ", error);
            }
          });
      })
      .catch((error) => {
        console.error("Error setting browser persistence: ", error);
      });
  }

  return (
    <>
      <Card className="signup-card">
        <CardContent>
          <Form {...signupForm}>
            <form
              className="form py-4"
              onSubmit={signupForm.handleSubmit(onSubmit)}
            >
              <FormField
                control={signupForm.control}
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
                control={signupForm.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>display name</FormLabel>
                    <FormControl>
                      <Input {...field}></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              ></FormField>
              <FormField
                control={signupForm.control}
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
              <FormField
                control={signupForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>confirm pasword</FormLabel>
                    <FormControl>
                      <Input type="password" {...field}></Input>
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              ></FormField>
              <Button type="submit">sign up!</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="link-container">
        <Link href="/login" className="link">
          already part of the community?
        </Link>
      </div>
    </>
  );
}
