import React from "react";
import Man from "../../../../../img/man.png";
import AnimatedText from "./AnimatedText";
import Circle from "./Circle";
import ProfileText from "./ProfileText";

const Header = () => {
  return (
    <div>
      <img
        src={Man}
        className="absolute max-w-xl lg:max-w-6xl right-0 left-0 translate-x-20 md:mx-auto  object-cover lg:w-9/12  md:translate-x-0 bottom-0"
      />
      <Circle />
      <AnimatedText />
      <ProfileText />
    </div>
  );
};

export default Header;
