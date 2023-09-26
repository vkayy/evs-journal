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
import { LogIn, LogOut, PersonStanding, UserCircle2 } from "lucide-react";
import { useAuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app } from "@/firebase.config";
import { toast } from "./ui/use-toast";

export default function ProfileDropdown() {
  const {user} = useAuthContext();
  const auth = getAuth(app);
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <UserCircle2></UserCircle2>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>account</DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        {user ? (
          <DropdownMenuItem
            onClick={() => {
              signOut(auth).then(() => {
                router.push("/login");
                console.log("user is ")
                console.log(user)
              }).catch((error) => {
                toast({
                  variant: "destructive",
                  title: "oops, try again!",
                  description: "the details you entered don't match :(",
                });
                console.error("Error signing user out: ", error)
              })
            }}
          >
            <LogOut className="h-4 w-4 mr-2"></LogOut>sign out!
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem onClick={() => {
                router.push("/signup")
            }}>
              <PersonStanding className="h-4 w-4 mr-2"></PersonStanding>sign up!
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {
                router.push("/login")
            }}>
              <LogIn className="h-4 w-4 mr-2"></LogIn>log in!
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
