import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 " style={{position:"relative"}}>
      <span className="text-xl font-bold tracking-wide">Payal</span>
      <ul className={` ${
        menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#About">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-300">
            About
            </li>
        </a>
        <a href="#Skills">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-300">
            Skills
            </li>
        </a>
        <a href="#Projects">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-300">
            Projects
            </li>
        </a>
        <a href="#Contact">
            <li className="text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-300">
            Contact
            </li>
        </a>
      </ul>
      { showMenu ? (
        <RiMenu2Line size={30} 
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
                setMenu(!menu);
                setShowMenu(!showMenu);
            }}
        />
      ):(
        <RiCloseLine
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300" />
      )}
    </nav>
  );
}

export default Navbar;
