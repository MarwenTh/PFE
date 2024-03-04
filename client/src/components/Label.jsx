import React from "react";

const Label = ({ htmlFor, text }) => {
  return (
    <div>
      <label htmlFor={htmlFor} className=" text-[#464255]">
        {text}
      </label>
    </div>
  );
};

export default Label;
