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
import { LogIn, PersonStanding, UserCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

function LoggedOutDropdown() {
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
        <DropdownMenuItem
          onClick={() => {
            router.push("/signup");
          }}
        >
          <PersonStanding className="h-4 w-4 mr-2"></PersonStanding>sign up!
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.push("/login");
          }}
        >
          <LogIn className="h-4 w-4 mr-2"></LogIn>log in!
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LoggedOutDropdown;
