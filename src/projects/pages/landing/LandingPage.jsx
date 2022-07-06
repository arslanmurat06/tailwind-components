import React from "react";
import Navbar from "../landing/components/Navbar";
import Header from "../landing/components/Header";
import Main from "./components/Main";

const LandingPage = () => {
  return (
    <div
      className="
  max-w-[2000px] 
  z-10
  mx-auto 
  bg-white
  text-neutral-900
  dark:text-neutral-200
  dark:bg-neutral-800
  "
    >
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default LandingPage;
