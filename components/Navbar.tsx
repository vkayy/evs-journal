export interface NavbarProps {
  navItems: NavItem[];
}

interface NavItem {
  key: string;
  path: string;
  text: string;
}

import LinkMenu from "./LinkMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { ThemeToggle } from "./ThemeToggle";

function Navbar({ navItems }: NavbarProps) {
  return (
    <>
      <nav className="navbar header__navbar">
        <h1 className="logo navbar__logo">
          ev <FontAwesomeIcon icon={faShieldHeart}></FontAwesomeIcon>
        </h1>
        <ul className="link-menu navbar__link-menu link-menu_axis_x">
          <LinkMenu navItems={navItems}></LinkMenu>
          <ThemeToggle></ThemeToggle>
        </ul>
        <button className="navbar__button navbar__button_axis_y">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
