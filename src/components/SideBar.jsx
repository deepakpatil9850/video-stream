import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const menuShowState = useSelector((store) => store?.menu?.menuState);

  return (
    menuShowState && (
      <div className="w-3/6 sm:w-2/6 md:w-1/6 h-screen fixed  top-14 pl-4 left-0 z-50 bg-white dark:bg-stone-800 ">
        <div className="text-left ml-4">
          <ul className="dark:text-white">
            <NavLink to={"/"}>
              <li className="font-bold cursor-pointer p-2 ">Trending</li>
            </NavLink>
            <li className=" p-2 ">Shorts</li>
            <li className=" p-2 ">Subscription</li>
            <li className=" p-2">History</li>
          </ul>
        </div>
      </div>
    )
  );
};
export default SideBar;
