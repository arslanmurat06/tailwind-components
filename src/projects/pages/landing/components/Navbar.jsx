import React, { useState } from "react";

import Logo from "../../../../img/image1.jpg";

const Navbar = () => {
  const [isOpen, openMenu] = useState(false);

  return (
    <nav
      className="
  mx-auto
  p-4 
  bg-amber-400 
  w-screen  "
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="/"
          className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-24 z-50"
        >
          <img
            src={Logo}
            width="100px"
            className=" lg:w-[150px] rounded-b-full hover:opacity-80 transition-opacity "
            alt="logo"
          />
        </a>
        <button
          onClick={() => openMenu(!isOpen)}
          className="lg:hidden z-50  text-neutral-900 hover:text-neutral-600 transition-colors "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
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
        </button>
        <div
          tabIndex="0"
          className={`
            ${isOpen ? `block` : `hidden`}
          flex
          lg:flex
          lg:flex-row
          lg:static
          lg:shadow-none
          lg:justify-between
          lg:w-full
          items-center
          transition-transform
          z-20
         
     
        flex-col
        gap-4
        absolute
        right-0
        left-0
        top-16 
        bg-amber-400
        shadow-xl 
        text-center
        p-6
        mt-10
        text-lg 
        dark:text-neutral-900`}
        >
          <a
            className="px-6 py-1 hover:text-neutral-600 transition-colors"
            href="/"
          >
            Home
          </a>
          <a
            className="       hov px-6 py-1 hover:text-neutral-600 transition-colors"
            href="/"
          >
            Items
          </a>
          <a
            className="lg:mr-auto  px-6 py-1 hover:text-neutral-600 transition-colors"
            href="/"
          >
            Labels
          </a>
          <a
            className=" px-6 py-1 hover:text-neutral-600 transition-colors"
            href="/"
          >
            Login
          </a>
          <a
            className=" shadow-xl rounded-md bg-teal-900 text-white px-6 py-2 hover:shadow-none transition-shadow"
            href="/"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
