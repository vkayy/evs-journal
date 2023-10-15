"use client";

import React from "react";
import { useAuthContext } from "./AuthProvider";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function PostJournalButton() {
  const { user } = useAuthContext();
  const router = useRouter();

  return (
    <>
      {user?.email == "vkrice2475@gmail.com" ||
      user?.email == "elenashannae21@gmail.com" ? (
        <Button
          className="button button_hover_scale button_hover_shadow button_active_scale"
          onClick={() => {
            router.push("/journal/create-entry");
          }}
        >
          write an entry!
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}

export default PostJournalButton;
