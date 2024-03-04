import React, { useState } from "react";
import img from "../assets/authentication.svg";
import { Link } from "react-router-dom";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../components/Logo";
import InputField from "../components/InputField";
import Icons from "../components/Icons";
import Label from "../components/Label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login");
  };
  setInterval(() => {
    setShowPassword(false);
  }, 10000);

  return (
    <>
      <div className=" flex justify-between">
        <div className=" h-screen w-fit flex flex-col justify-center m-auto">
          <Logo link={"/login"} />
          <form className="" onSubmit={handleLogin}>
            <div className=" mx-20 py-7">
              <h1 className=" font-Poppins my-9 text-center text-2xl font-medium text-[#464255]">
                Sign in to your account
              </h1>
              <div className=" flex flex-col gap-3">
                <Label htmlFor="email" text="Your Email" />
                <InputField
                  type="email"
                  id="email"
                  placeholder="Enter your Email"
                  icon={faEnvelope}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className=" flex justify-between mr-2">
                  <Label htmlFor="password" text="Your Password" />
                  <Link to={"/forget-password"}>Forget Password?</Link>
                </div>
                <InputField
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={() => setShowPassword(!showPassword)}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex mb-5 mt-2 gap-3">
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
              <button className=" w-[30rem] h-12 rounded-xl bg-[#AB54DB] hover:bg-[#cb75fa] transition-all ease duration-300 font-medium text-white">
                Sign In
              </button>
              <div className=" relative my-3 flex justify-center py-2">
                <hr className=" w-96 absolute top-4" />
                <div className="flex justify-center">
                  <span className=" bg-white px-4  z-10 text-[#464255]">
                    Or
                  </span>
                </div>
              </div>
              <div className=" flex gap-4 justify-center">
                <Icons icon={faGoogle} text="Google" />
                <Icons icon={faApple} text="Apple" />
              </div>
              <div className=" flex justify-center my-5 gap-3">
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
        <div className=" bg-[#f3f3f5] w-fit h-screen flex justify-center items-center ">
          <img src={img} alt="login" className=" text-white px-14" />
        </div>
      </div>
    </>
  );
};

export default Login;
