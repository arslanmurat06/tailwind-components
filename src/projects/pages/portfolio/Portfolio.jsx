import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const Portfolio = () => {
  return (
    <div className=" font-nunito h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
      <Navbar />
      <Header />
    </div>
  );
};

export default Portfolio;
