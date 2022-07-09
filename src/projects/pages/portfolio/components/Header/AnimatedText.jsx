import React from "react";
import TypeAnimation from "react-type-animation";

const AnimatedText = () => {
  return (
    <div className="absolute top-1/3 left-5 lg:left-40 lg:top-30 lg:text-7xl md:text-4xl xl:text-7xl  text-5xl ">
      <span className="text-gray-600">Freelance</span>
      <p className="text-red-500 font-semibold">
        <TypeAnimation
          cursor={true}
          sequence={["Developer", 4000, "Engineer", 4000, "Designer", 4000]}
          wrapper="p"
          repeat={Infinity}
        />
      </p>
    </div>
  );
};

export default AnimatedText;
