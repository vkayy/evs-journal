export interface NavbarProps {
  navItems: NavItem[];
}

export interface NavItem {
  key: string;
  path: string;
  text: string;
}

import LinkMenu from "./LinkMenu";
import { ThemeToggle } from "./ThemeToggle";
import SheetNavbar from "./SheetNavbar";
import FullLogo from "./FullLogo";

function Navbar({ navItems }: NavbarProps) {
  return (
    <>
      <nav className="navbar header__navbar">
        <FullLogo></FullLogo>
        <ul className="link-menu navbar__link-menu link-menu_axis_x">
          <LinkMenu navItems={navItems} purpose="default"></LinkMenu>
          <div className="hidden md:block">
            <ThemeToggle></ThemeToggle>
          </div>
        </ul>
        <ul className="flex justify-center items-center md:hidden">
          <ThemeToggle></ThemeToggle>
          <SheetNavbar navItems={navItems}></SheetNavbar>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
