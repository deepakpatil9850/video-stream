import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
