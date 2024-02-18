import React from "react";
import CategoriesBtn from "./CategoriesBtn";
import SubContainer from "./SubContainer";

const MainContainer = () => {
  return (
    <div className="w-full absolute top-14">
      <CategoriesBtn />
      <SubContainer />
    </div>
  );
};

export default MainContainer;
