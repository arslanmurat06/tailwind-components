import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex w-screen bg-black text-white h-[50px] items-center justify-around">
      <Link to="profile">
        <span className="custom-span">Profile Card</span>
      </Link>
      <Link to="landing">
        <span className="custom-span">Landing Page</span>
      </Link>

      {/* <span className="custom-span">Profile Card</span>
      <span className="custom-span">Profile Card</span>
      <span className="custom-span">Profile Card</span> */}
    </div>
  );
};

export default Navbar;
