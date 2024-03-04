import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = ({ link }) => {
  return (
    <div>
      <Link to={link} className=" flex justify-center items-center gap-3">
        <img src={logo} alt="logo" className=" w-20" />
        <div className="relative">
          <div className=" font-Italianno text-5xl h-fit w-fit">FinalStep</div>
          <span className=" font-SerifDisplay text-xl absolute top-8">
            Academy
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
