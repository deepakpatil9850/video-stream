import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="flex max-h-full">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
