import React from "react";
import CategoriesBtn from "./CategoriesBtn";
import SubContainer from "./SubContainer";
import { ErrorBoundary } from "react-error-boundary";

const MainContainer = () => {
  return (
    <div className="w-full absolute top-14">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <CategoriesBtn />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <SubContainer />
      </ErrorBoundary>
    </div>
  );
};

export default MainContainer;
