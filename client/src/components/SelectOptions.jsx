import React, { useState } from "react";
import { motion } from "framer-motion";

const SelectOptions = () => {
  const [isActive, setIsActive] = useState(false);
  const [roleSelected, setRoleSelected] = useState("Role");

  return (
    <div className="relative z-50">
      <div>
        <motion.div
          className="w-full h-12 rounded-xl bg-[#fafbfe] hover:bg-[#e7ebf7] cursor-pointer flex justify-between items-center px-6  transition-all duration-300 ease-in-out"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsActive(!isActive)}
        >
          <span>{roleSelected}</span>
        </motion.div>
      </div>
      <motion.div
        className="absolute w-full"
        style={{ overflow: "hidden" }}
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.div className="h-fit bg-[#fafbfe] rounded-lg mt-1 shadow-lg divide-y">
          <div
            className=" px-6 cursor-pointer h-11 hover:bg-rose-400 flex justify-start items-center rounded-lg"
            onClick={() => {
              setRoleSelected("Admin");
              setIsActive(false);
            }}
          >
            Admin
          </div>
          <div
            className=" px-6 cursor-pointer h-11 hover:bg-rose-400 flex justify-start items-center rounded-lg"
            onClick={() => {
              setRoleSelected("Manager");
              setIsActive(false);
            }}
          >
            Manager
          </div>
          <div
            className=" px-6 cursor-pointer h-11 hover:bg-rose-400 flex justify-start items-center rounded-lg"
            onClick={() => {
              setRoleSelected("Student");
              setIsActive(false);
            }}
          >
            Student
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SelectOptions;
