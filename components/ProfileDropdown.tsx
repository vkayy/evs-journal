"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { LogIn, LogOut, PersonStanding, User, UserCircle2 } from "lucide-react";
import { useAuthContext } from "./AuthProvider";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/firebase/firebase.config";
import { toast } from "./ui/use-toast";
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
