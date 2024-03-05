import React, { useState } from "react";
import Logo from "../components/Logo";
import img from "../assets/authentication.svg";
import Label from "../components/Label";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";
import SelectOptions from "../components/SelectOptions";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  setInterval(() => {
    setShowPassword(false);
  }, 10000);

  return (
    <div>
      <div className=" flex justify-between items-center ">
        <div className=" h-fit w-7/12">
          <Logo link={"/signup"} />
          <form action="" className=" flex justify-center">
            <div className=" flex flex-col gap-3">
              <h1 className=" font-Poppins my-9 text-center text-2xl font-medium text-[#464255]">
                Create your Account
              </h1>
              <Label htmlFor="firstName" text="Your First Name" />
              <InputField
                type="text"
                id="firstName"
                placeholder="Enter your First Name"
                icon={faUser}
              />
              <Label htmlFor="lastName" text="Your Last Name" />
              <InputField
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
                icon={faUser}
              />
              <Label htmlFor="email" text="Your Email" />
              <InputField
                type="email"
                id="email"
                placeholder="Enter your Email"
                icon={faEnvelope}
              />
              <SelectOptions />
              <Label htmlFor="password" text="Your Password" />
              <InputField
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                icon={showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
              />
              <Label htmlFor="confirmPassword" text="Confirm Password" />
              <InputField
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Enter your password"
                icon={showPassword ? faEye : faEyeSlash}
                onClick={() => setShowPassword(!showPassword)}
              />
              <div className=" flex gap-1 w-[30rem] ">
                <input type="checkbox" id="checkbox" className="" />
                <Label
                  htmlFor="checkbox"
                  text="By creating an account you agree to our"
                />
                <Link to={"/terms"} className="text-[#AB54DB]">
                  Terms & Conditions
                </Link>
              </div>
              <button className=" w-[30rem] my-5 h-12 rounded-xl bg-[#AB54DB] hover:bg-[#cb75fa] transition-all ease duration-300 font-medium text-white">
                Sign Up
              </button>
              <div className=" flex justify-center gap-3">
                <span className="text-[#464255] font-Poppins text-base">
                  Already have an account?
                </span>
                <Link
                  to="/login"
                  className=" font-Poppins text-[#AB54DB] transition-all ease duration-300 hover:text-[#AB54DB]"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-[#f3f3f5] w-fit h-screen hidden justify-center items-center laptop:flex desktop:flex">
          <img src={img} alt="img" className="px-14" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
