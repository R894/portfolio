import React from "react";
import GridIcon from "../../components/icons/GridIcon";
import UserIcon from "../../components/icons/UserIcon";
import CodeIcon from "../../components/icons/CodeIcon";
import MonitorIcon from "../../components/icons/MonitorIcon";
import MailIcon from "../../components/icons/MailIcon";

interface NavItemProps {
  children: React.ReactNode;
  scrollTo: string;
}

const NavItem: React.FC<NavItemProps> = ({ children, scrollTo }) => {
  const handleClickScroll = () => {
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a
      onClick={() => {
        handleClickScroll();
      }}
    >
      <li className="hover:bg-white hover:text-black transition ease-in-out rounded-xl duration-150 p-2">
        {children}
      </li>
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-bg2 hidden xl:block border-2 border-white fixed top-7 left-7 rounded-xl px-3 py-2">
      <ul className="flex flex-col gap-4">
        <NavItem scrollTo="home">
          <GridIcon />
        </NavItem>
        <NavItem scrollTo="about">
          <UserIcon />
        </NavItem>
        <NavItem scrollTo="skills">
          <CodeIcon />
        </NavItem>
        <NavItem scrollTo="projects">
          <MonitorIcon />
        </NavItem>
        <NavItem scrollTo="contact">
          <MailIcon />
        </NavItem>
      </ul>
    </nav>
  );
};
export default Navbar;
