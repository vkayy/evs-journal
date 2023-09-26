"use client";

import LoginForm from "@/components/LoginForm";
import MainSection from "@/components/MainSection";
import { Toaster } from "@/components/ui/toaster";

export default function Page() {
  return (
    <>
      <main className="main main_login">
        <MainSection id="log-in" heading="get into the action!">
          <LoginForm></LoginForm>
        </MainSection>
      </main>
      <Toaster></Toaster>
    </>
  );
}
