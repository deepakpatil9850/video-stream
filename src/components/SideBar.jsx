import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const menuShowState = useSelector((store) => store.menu.menuState);
  return (
    menuShowState && (
      <div className="border  w-2/12 h-full">
        <div className="text-center">
          <ul>
            <li className="text-bold cursor-pointer p-2  hover:bg-slate-50">
              Home
            </li>
            <li className="text-bold cursor-pointer p-2  hover:bg-slate-50">
              Shorts
            </li>
            <li className="text-bold cursor-pointer p-2  hover:bg-slate-50">
              Subscription
            </li>
            <li className="text-bold cursor-pointer p-2  hover:bg-slate-50">
              History
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default SideBar;
