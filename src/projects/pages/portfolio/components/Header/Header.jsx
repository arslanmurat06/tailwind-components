import React from "react";
import Man from "../../../../../img/man.png";
import AnimatedText from "./AnimatedText";
import Circle from "./Circle";

const Header = () => {
  return (
    <div>
      <img
        src={Man}
        className="absolute right-0 translate-x-20 md:mx-auto object-cover   md:translate-x-0 bottom-0"
      />
      <Circle />
      <AnimatedText />
    </div>
  );
};

export default Header;
