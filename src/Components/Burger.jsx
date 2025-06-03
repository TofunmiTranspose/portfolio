import React, {useContext} from "react";
import { ThemeContext } from "../App";
import MenuIcon from "@mui/icons-material/Menu";

const Burger = () => {
  const {theme} = useContext(ThemeContext);
  const style = theme ? {a:'text-white'} : {a:'text-[#1b1b1b]'}
  return (
    <div className="sm:hidden flex items-center justify-center h-10 w-10">
      <MenuIcon
        className={`${style.a} rounded-full font-sm m-0`}
        style={{ fontSize: "25px", Padding: "5px" }}
      />
    </div>
  );
};

export default Burger;
