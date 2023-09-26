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
import ProfileDropdown from "./ProfileDropdown";

function Navbar({ navItems }: NavbarProps) {
  return (
    <>
      <nav className="navbar header__navbar">
        <div className="navbar__container">
          <FullLogo></FullLogo>
          <ul className="link-menu navbar__link-menu link-menu_axis_x">
            <LinkMenu navItems={navItems} purpose="default"></LinkMenu>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ThemeToggle></ThemeToggle>
          </div>
          <ul className="flex justify-center items-center gap-2 md:hidden">
            <ThemeToggle></ThemeToggle>
            <ProfileDropdown></ProfileDropdown>
            <SheetNavbar navItems={navItems}></SheetNavbar>
          </ul>
          <div className="hidden md:block">
            <ProfileDropdown></ProfileDropdown>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
