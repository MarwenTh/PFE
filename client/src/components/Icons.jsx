import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icons = ({ icon, text }) => {
  return (
    <div>
      <div className=" border rounded-xl h-11 px-4 flex justify-center items-center gap-2 cursor-pointer hover:border-[#AB54DB] transition-all ease duration-300">
        <FontAwesomeIcon icon={icon} />
        <span className="">{text}</span>
      </div>
    </div>
  );
};

export default Icons;
