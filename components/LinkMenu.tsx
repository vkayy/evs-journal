"use client";

import { NavItem } from "./Navbar";

interface LinkMenuProps {
  navItems: NavItem[];
  purpose: "default" | "sheet";
}

import Link from "next/link";
import { SheetClose } from "./ui/sheet";

function LinkMenu({ navItems, purpose }: LinkMenuProps) {
  return navItems.map((navItem) => (
    <li key={navItem.key}>
      {purpose === "sheet" ? (
        <SheetClose asChild>
          <Link
            href={navItem.path}
            className="link-menu__item link-menu__item_hover_underline"
          >
            {navItem.text}
          </Link>
        </SheetClose>
      ) : (
        <Link
          href={navItem.path}
          className="link-menu__item link-menu__item_hover_underline"
        >
          {navItem.text}
        </Link>
      )}
    </li>
  ));
}

export default LinkMenu;
