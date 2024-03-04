import React, { useEffect } from "react";
import img from "../assets/authentication.svg";
import logo from "../assets/logo.svg";
import logoImgDark from "../assets/logo-dark.png";
import logoImgLight from "../assets/logo-light.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <>
      <div className=" flex justify-between">
        <div className=" h-screen w-fit flex flex-col justify-center m-auto">
          <form className="">
            <div className=" mx-20 py-10">
              <div className=" flex justify-center items-center gap-3">
                <img src={logo} alt="logo" className=" w-20" />
                <div className="relative">
                  <div className=" font-Italianno text-5xl h-fit w-fit">
                    FinalStep
                  </div>
                  <span className=" font-SerifDisplay text-xl absolute top-8">
                    Academy
                  </span>
                </div>
              </div>
              <h1 className=" font-Poppins my-11 text-center text-2xl font-medium text-[#464255]">
                Sign in to your account
              </h1>
              <div className=" flex flex-col">
                <label htmlFor="email" className=" mb-3 text-[#464255]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className=" h-12 w-[30rem] rounded-xl pl-6 placeholder:font-Poppins placeholder:text-[#76737a] outline-none border focus:border-[#AB54DB] focus:outline-none focus:transition-all focus:ease focus:duration-300"
                />
                <label htmlFor="password" className=" my-3 text-[#464255]">
                  Your Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="h-12 w-[30rem] rounded-xl pl-6 placeholder:font-Poppins placeholder:text-[#76737a] outline-none border focus:border-[#AB54DB] focus:outline-none focus:transition-all focus:ease focus:duration-300"
                />
                <div className="flex my-3 gap-3">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="form-checkbox text-purple-500"
                  />
                  <label
                    htmlFor="remember"
                    className=" text-[#464255] font-Poppins text-sm "
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <button className=" w-[30rem] h-12 rounded-xl bg-[#AB54DB] hover:bg-[#AB54DB] transition-all ease duration-300 font-medium text-white">
                Sign In
              </button>
              <div className=" relative m-auto">
                <hr className=" w-96 absolute top-4" />
                <div className="flex justify-center">
                  <span className=" bg-white px-4 py-1 z-10 text-[#464255]">
                    Or
                  </span>
                </div>
              </div>
              <div className=" flex gap-4 justify-center">
                <div className=" border rounded-xl h-11 px-4 flex justify-center items-center gap-2 cursor-pointer hover:border-[#AB54DB] transition-all ease duration-300">
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className="">Google</span>
                </div>
                <div className=" border rounded-xl h-11 px-4 flex justify-center items-center gap-2 cursor-pointer hover:border-[#AB54DB] transition-all ease duration-300">
                  <FontAwesomeIcon icon={faApple} />
                  <span>Apple</span>
                </div>
              </div>
              <div className=" flex justify-end my-5 gap-3">
                <span className="text-[#464255] font-Poppins">
                  Don't Have An Account?
                </span>
                <Link
                  to="/signup"
                  className=" font-Poppins text-[#AB54DB] transition-all ease duration-300 hover:text-[#AB54DB]"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className=" bg-[#f3f2f7] w-fit h-screen flex justify-center items-center ">
          <img src={img} alt="login" className=" text-white pr-14 pl-14 " />
        </div>
      </div>
    </>
  );
};

export default Login;
