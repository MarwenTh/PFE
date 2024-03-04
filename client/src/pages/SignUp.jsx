import React from "react";
import Logo from "../components/Logo";
import img from "../assets/authentication.svg";
import Label from "../components/Label";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const SignUp = () => {
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
              />
              <Label htmlFor="lastName" text="Your Last Name" />
              <InputField
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
              />
              <Label htmlFor="email" text="Your Email" />
              <InputField
                type="email"
                id="email"
                placeholder="Enter your Email"
              />
              <Label htmlFor="password" text="Your Password" />
              <InputField
                type="password"
                id="password"
                placeholder="Enter your password"
              />
              <Label htmlFor="confirmPassword" text="Confirm Password" />
              <InputField
                type="password"
                id="confirmPassword"
                placeholder="Enter your password"
              />
              <div className=" flex gap-1 w-[30rem] text-wrap">
                <InputField type="checkbox" id="checkbox" className="" />
                <Label
                  htmlFor="checkbox"
                  text="By creating an account you agree to our"
                />
                <Link to={"/terms"} className="text-[#AB54DB] break-words">
                  Terms & Conditions Privacy Policy
                </Link>
              </div>
              <button className=" w-[30rem] my-5 h-12 rounded-xl bg-[#AB54DB] hover:bg-[#cb75fa] transition-all ease duration-300 font-medium text-white">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#f3f3f5] w-fit h-screen flex justify-center items-center ">
          <img src={img} alt="img" className="px-14" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
