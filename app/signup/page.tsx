"use client";

import MainSection from "@/components/MainSection";
import SignupForm from "@/components/SignupForm";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  return (
    <>
      <main className="main main_signup">
        <MainSection id="sign-up" heading="start your journey here!">
          <SignupForm></SignupForm>
        </MainSection>
      </main>
      <Toaster></Toaster>
    </>
  );
}
