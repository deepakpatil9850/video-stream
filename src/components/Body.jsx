import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="w-full h-auto relative">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
