"use client";

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
import { useAuthContext } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

function RequestDialog() {
  const { user } = useAuthContext();
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="button request-container__button button_hover_scale button_hover_shadow button_active_scale">
          have an idea? let us know!
        </Button>
      </DialogTrigger>
      <DialogContent className="dialog-content">
        {user ? (
          <>
            <DialogHeader>
              <DialogTitle>make a request</DialogTitle>
              <DialogDescription>be as creative as you want!</DialogDescription>
            </DialogHeader>
            <TopicRequestForm></TopicRequestForm>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>you aren&apos;t logged in!</DialogTitle>
              <DialogDescription>
                in order to give you credit, it&apos;s important that you are!
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
  );
}

export default RequestDialog;
