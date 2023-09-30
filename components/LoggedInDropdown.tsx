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
import { LogOut, User, UserCircle2 } from "lucide-react";
import { useAuthContext } from "./AuthProvider";
import { useRouter } from "next/navigation";
import { app } from "@/firebase/firebase.config";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "./ui/use-toast";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

function LoggedInDropdown() {
  const { user } = useAuthContext();
  const auth = getAuth(app);
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost" className="rounded-full">
          <Avatar className="h-8 w-8 flex justify-center items-center">
            <AvatarImage src="" alt="user profile picture"></AvatarImage>
            <AvatarFallback>
              <UserCircle2></UserCircle2>
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user!.displayName}</p>
            <p className="text-xs font-normal text-muted-foreground">
              {user!.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem onClick={() => router.push("/profile")}>
          <User className="h-4 w-4 mr-2"></User>profile
        </DropdownMenuItem>
        <DropdownMenuSeparator></DropdownMenuSeparator>
        <DropdownMenuItem
          onClick={() => {
            signOut(auth)
              .then(() => {
                window.location.reload();
              })
              .catch((error) => {
                toast({
                  variant: "destructive",
                  title: "oops, try again!",
                  description: "the details you entered don't match :(",
                });
                console.error("Error signing user out: ", error);
              });
          }}
        >
          <LogOut className="h-4 w-4 mr-2"></LogOut>log out!
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LoggedInDropdown;
