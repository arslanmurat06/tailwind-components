import React from "react";
import { useState } from "react";

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <svg
        onClick={() => setMenuOpen(!menuOpen)}
        xmlns="http://www.w3.org/2000/svg"
        class={`h-6 w-6 cursor-pointer md:hidden z-50 ${
          menuOpen && "text-white"
        }  `}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <ul
        className={`md:hidden rounded-b-xl space-y-10 z-40 text-white font-bold text-sm uppercase absolute w-full bg-indigo-700 top-0 left-0 p-10 text-center ${
          !menuOpen && "hidden "
        }`}
      >
        <li className="hover:text-gray-400 ">
          <a href="#">homepage</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#">about</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#">services</a>
        </li>
        <li className="hover:text-gray-500">
          <a href="#">works</a>
        </li>
        <li className="hover:text-gray-500">
          <a>contact</a>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
