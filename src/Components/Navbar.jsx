import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 w-7/10 h-15 px-1 py-3 items-center justify-around rounded-full flex">
      <div>
        <h2 className="text-xl font-bold text-white">TRANSPOSE</h2>
      </div>
      <div>
        <button className="bg-teal-500 px-3 w-20 py-1 rounded-full text-white font-semibold text-sm">
          <a href="https://wa.link/yjileb">Hire Me</a>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
