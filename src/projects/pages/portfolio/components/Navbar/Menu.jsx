import React from "react";

const Menu = () => {
  return (
    <ul className="md:flex hidden text-gray-600 space-x-10 font-bold text-sm uppercase ">
      <li className="hover:text-gray-500">
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
  );
};

export default Menu;
