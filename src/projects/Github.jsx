import React from "react";
import { TiSocialGithub } from "react-icons/ti";

const Github = () => {
  return (
    <div className="z-30 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white fixed bottom-[130px] right-20 animate-bounce ...">
      <a href="https://github.com/arslanmurat06/tailwind-components">
        <TiSocialGithub className="text-4xl text-black cursor-pointer hover:text-6xl ease-linear duration-500" />
      </a>
    </div>
  );
};

export default Github;
