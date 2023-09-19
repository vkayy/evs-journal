import { NavbarProps } from "./Navbar";

import Link from "next/link";

function LinkMenu({ navItems }: NavbarProps) {
  return navItems.map((navItem) => (
    <li key={navItem.key}>
      <Link href={navItem.path} className="link-menu__item link-menu__item_hover_underline">
        {navItem.text}
      </Link>
    </li>
  ));
}

export default LinkMenu;
