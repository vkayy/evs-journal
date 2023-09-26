"use client";

import { NavbarProps } from "./Navbar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import LinkMenu from "./LinkMenu";
import { Menu } from "lucide-react";

function SheetNavbar({ navItems }: NavbarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>navigation</SheetTitle>
          <SheetDescription>find your way around our website!</SheetDescription>
        </SheetHeader>
        <ul className="link-menu navbar__link-menu link-menu_axis_y mt-12">
          <LinkMenu navItems={navItems} purpose="sheet"></LinkMenu>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default SheetNavbar;
