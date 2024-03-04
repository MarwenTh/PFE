import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputField = ({ type, id, placeholder, icon, onClick, className }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`h-12 w-[30rem] rounded-xl pl-6 pr-10 placeholder:font-Poppins placeholder:text-[#76737a] outline-none border focus:border-[#AB54DB] focus:outline-none focus:transition-all focus:ease focus:duration-300 ${className}`}
      />
      <FontAwesomeIcon
        onClick={onClick}
        icon={icon}
        className="absolute top-4 right-5 text-base"
      />
    </div>
  );
};

export default InputField;
