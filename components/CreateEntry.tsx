"use client";

import React from "react";
import { useAuthContext } from "./AuthProvider";
import MainSection from "./MainSection";
import { Card, CardContent } from "./ui/card";
import EntryEditor from "./EntryForm";

function CreateEntry() {
  const { user } = useAuthContext();

  return user?.email == "vkrice2475@gmail.com" ||
    user?.email == "elenashannae21@gmail.com" ? (
    <main className="main main_edit-request">
      <MainSection id="edit-request" heading="">
        <Card className="max-w-xl mx-auto pt-4">
          <CardContent>
            <EntryEditor></EntryEditor>
          </CardContent>
        </Card>
      </MainSection>
    </main>
  ) : (
    <main className="main main_edit-request">
      <MainSection id="edit-request-error" heading="">
        <Card className="max-w-fit mx-auto transition-all duration-300">
          <CardContent className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-8 pt-4 px-4 mx-auto">
              <h2 className="leading-none text text_heading text-center">
                sorry! :&#40;
              </h2>
              <p className="leading-none text text_paragraph text-center">
                this request doesn&apos;t exist!
              </p>
            </div>
          </CardContent>
        </Card>
      </MainSection>
    </main>
  );
}

export default CreateEntry;
