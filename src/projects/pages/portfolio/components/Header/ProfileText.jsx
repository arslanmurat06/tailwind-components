import React from "react";

const ProfileText = () => {
  return (
    <div className="hidden lg:flex flex-col absolute top-0 bottom-0 right-10 m-auto bg-white w-1/3 h-fit p-5 gap-5  rounded-lg shadow-lg">
      <h1 className="font-bold text-xl text-indigo-900">Hi, I`m Murat</h1>
      <p className="text-gray-400">
        I`m software developer working for 8 years. I have graduaded from
        electrical and electronics engineering Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolor totam repudiandae deleniti expedita
        Odio, sapiente.
      </p>
      <a
        className="bg-indigo-800 w-fit px-3 py-2 text-white rounded-md"
        href="#contact"
      >
        Hire Me
      </a>
    </div>
  );
};

export default ProfileText;
