import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const menuShowState = useSelector((store) => store.menu.menuState);
  return (
    menuShowState && (
      <div className="border w-2/12 h-screen fixed  top-20 pl-4 left-0 z-50 bg-white dark:bg-stone-900 ">
        <div className="text-left ml-4">
          <ul className="dark:text-white">
            <NavLink to={"/"}>
              <li className="text-bold cursor-pointer p-2 ">Popular</li>
            </NavLink>
            <li className="text-bold cursor-pointer p-2 ">Shorts</li>
            <li className="text-bold cursor-pointer p-2 ">Subscription</li>
            <li className="text-bold cursor-pointer p-2">History</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default SideBar;
