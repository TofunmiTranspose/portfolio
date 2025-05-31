import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Padding } from "@mui/icons-material";
const Navbar = () => {
  return (
    <div className="mx-auto flex justify-between w-9/10">
      <div className="bg-gray-800 w-7/10 h-20 px-1 py-3 items-center justify-around rounded-full flex">
        <h2 className="text-xl font-bold text-white">TRANSPOSE</h2>
        <button className="bg-teal-500 px-3  py-1 rounded-full text-white font-semibold text-sm">
          Hire Me
        </button>
      </div>
      <div className="bg-gray-800 h-20 w-20 flex items-center justify-center rounded-full">
        <div className="border-1 border-white flex items-center justify-center h-10 w-10 rounded-full">
          <MenuIcon
            className="text-white rounded-full font-sm m-0"
            style={{ fontSize: "25px", Padding: "5px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
