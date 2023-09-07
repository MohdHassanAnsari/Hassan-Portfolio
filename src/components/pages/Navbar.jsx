import React, { useState } from "react";
import { NavSvg } from "../svgs/NavSvg";
import { ResumeButton } from "../buttons/ResumeButton";
import { MenuIconClose, MenuIconOpen } from "../svgs/MenuIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { text: "About", link: "#" },
    { text: "Skills", link: "#" },
    { text: "Projects", link: "#" },
    { text: "Contact", link: "#" },
  ];

  return (
    <div className="fixed left-0 top-0 w-full bg-black shadow-md">
      <div className="items-center justify-around  px-7 md:flex md:px-10">
        <div
          className="relative bottom-2 flex cursor-pointer 
      "
        >
          <NavSvg />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          <span>{open ? <MenuIconClose /> : <MenuIconOpen />}</span>
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full rounded-md bg-black pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {navItems.map((navItem, index) => (
            <li key={index} className="my-7 text-xl md:my-0 md:ml-8">
              <a
                href={navItem.link}
                className="link-underline-black link-underline hover:   flex-auto duration-500"
              >
                {navItem.text}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`absolute left-0 z-[-1] w-full bg-transparent pb-12 pl-9 text-base transition-all duration-500 ease-in md:static md:z-auto md:flex  md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? "top-80 " : "top-[-490px]"
          }`}
        >
          <ResumeButton>Resume</ResumeButton>
        </div>
      </div>
    </div>
  );
}
