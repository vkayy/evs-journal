import React from "react";
import { DialogHeader, DialogDescription, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function LogInPrompt() {
  const router = useRouter();

  return (
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
  );
}

export default LogInPrompt;
