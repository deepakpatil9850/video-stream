import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import SideBar from "./SideBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorMini from "./ErrorMini";

const Body = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Header />
      <SideBar />
      <ErrorBoundary fallback={<ErrorMini />}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
};

export default Body;
