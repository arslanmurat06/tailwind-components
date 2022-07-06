import React from "react";

const Quality = (props) => {
  return (
    <div
      className="container
  mx-auto
  max-w-5xl
  flex
  flex-wrap
  gap-12
  items-start
  justify-center
  md:justify-between
  mb-16"
    >
      <div
        className="grid
        gap-4 
        justify-items-center 
        text-center 
        md:flex-1"
      >
        <div className=" border-amber-400 border-8 p-4 rounded-full">
          {props.svg}
        </div>
        <h3 className="text-3xl font-bold">{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Quality;
