import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    <div className="flex justify-between w-9/10 items-center">
      <div className="bg-gray-800 w-7/10 h-15 px-1 py-3 items-center justify-around rounded-full flex">
        <h2 className="text-xl font-bold text-white">TRANSPOSE</h2>
        <button className="bg-teal-500 px-3  py-1 rounded-full text-white font-semibold text-sm">
          <a href="https://wa.link/yjileb">Hire Me</a>
        </button>
      </div>
        <div className="flex items-center justify-center h-10 w-10">
          <MenuIcon
            className="text-white rounded-full font-sm m-0"
            style={{ fontSize: "25px", Padding: "5px" }}
          />
        </div>
    </div>
  );
};

export default Navbar;
