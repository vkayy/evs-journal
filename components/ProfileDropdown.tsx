"use client";

import { useAuthContext } from "./AuthProvider";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase/firebase.config";
import LoggedInDropdown from "./LoggedInDropdown";
import LoggedOutDropdown from "./LoggedOutDropdown";

export default function ProfileDropdown() {
  const { user } = useAuthContext();
  const auth = getAuth(app);
  const router = useRouter();

  return (
    <>
      {user ? (
        <LoggedInDropdown></LoggedInDropdown>
      ) : (
        <LoggedOutDropdown></LoggedOutDropdown>
      )}
    </>
  );
}
