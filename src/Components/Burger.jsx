import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Burger = () => {
  return (
    <div className="flex items-center justify-center h-10 w-10">
      <MenuIcon
        className="text-white rounded-full font-sm m-0"
        style={{ fontSize: "25px", Padding: "5px" }}
      />
    </div>
  );
};

export default Burger;
