"use client";

import MainSection from "@/components/MainSection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TopicRequestForm from "@/components/TopicRequestForm";
import { Toaster } from "@/components/ui/toaster";
import { useAuthContext } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  return (
    <>
      <main className="main main_journal">
        <MainSection id="journal" heading="our journal entries">
          <>
            <div className="entry-container">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="button entry-container__button button_hover_shadow button_active_scale">
                    request a topic for us to cover!
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  {user ? (
                    <>
                      <DialogHeader>
                        <DialogTitle>make a request</DialogTitle>
                        <DialogDescription>
                          be as creative as you want!
                        </DialogDescription>
                      </DialogHeader>
                      <TopicRequestForm></TopicRequestForm>
                    </>
                  ) : (
                    <>
                      <DialogHeader>
                        <DialogTitle>you aren&apos;t logged in!</DialogTitle>
                        <DialogDescription>
                          in order to give you credit, it&apos;s important that
                          you are!
                        </DialogDescription>
                      </DialogHeader>
                      <Button
                        onClick={() => {
                          router.push("/login");
                        }}
                      >
                        don&apos;t miss out!
                      </Button>
                    </>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          </>
        </MainSection>
      </main>
      <Toaster></Toaster>
    </>
  );
}
