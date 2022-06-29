import React from "react";
import { TiSocialGithub } from "react-icons/ti";

const Github = () => {
  return (
    <div className=" flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white absolute bottom-[130px] right-20 animate-bounce ...">
      <a href="http://www.google.com">
        <TiSocialGithub className="text-4xl text-black cursor-pointer hover:text-6xl ease-linear duration-500" />
      </a>
    </div>
  );
};

export default Github;
